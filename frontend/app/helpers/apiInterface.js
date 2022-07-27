import fetch from 'fetch';

function apiResponse(status) {
  return {
    status,
    data: null,
    error: null,
  };
}

const API_PATH = 'https://lynx.ai-data-store.s.redhost.be/aggregations';

/**
 * Returns the amount of decisions made by a municipality in a year.
 * @param {*} municipality
 * @param {*} year
 */
export async function getDecisionsCount(municipality, year) {
  const options = {
    method: 'GET',
    mode: 'cors',
  };

  console.log('meow');

  const fetchResponse = await fetch(
    `${API_PATH}/decisions-query?municipality=${municipality}&year=${year}`,
    options
  );
  const response = apiResponse(fetchResponse.status);

  if (fetchResponse.status !== 200) {
    response.error = `Error fetching decisions count: ${response.status}`;
  } else {
    response.data = await fetchResponse.json();
  }

  return response;
}

/**
 * Aggregates and filters the tax revenues.
 * @param {Object} filters Available filters:
 * - `municipality`
 * - `province`
 * - `year`
 * - `marcode`
 * - `category`
 * @param {string[]} groupBy Variable(s) to group revenues by.
 */
export async function getRevenueSummary(filters, groupBy) {
  const options = {
    method: 'GET',
    mode: 'cors',
  };

  let url = API_PATH + '/revenue-query';

  const params = Object.entries(filters).map(([key, val]) => `${key}=${val}`);
  console.log(params);

  if (groupBy && groupBy.length > 0) {
    params.push(`groupBy=${groupBy.join(',')}`);
  }

  if (params.length) {
    url += '?' + params.join('&');
  }

  console.log(url);

  const fetchResponse = await fetch(url, options).catch((error) => {
    console.log(error);
  });
  console.log(fetchResponse);
  const response = apiResponse(fetchResponse.status);
  console.log(response);

  if (fetchResponse.status !== 200) {
    response.error = `Error fetching revenue summary: ${response.status}`;
  } else {
    response.data = await fetchResponse.json();
  }

  return response;
}

export async function revenuePerYear(municipality) {
  const response = await getRevenueSummary({ municipality }, ['year']);

  if (response.error !== null) {
    throw Error('Error fetching revenue per year');
  } else {
    return response.data.results.map((val) => [
      val.year.value,
      val.totalAmount.value,
    ]);
  }
}

export async function revenuePerCategory(municipality) {
  try {
    const year = new Date().getFullYear();
    const response = await getRevenueSummary({ municipality, year }, [
      'category',
    ]);

    if (response.error !== null) {
      throw Error('Error fetching revenue per category');
    } else {
      return response.data.results.map((val) => [
        val.category.value,
        val.totalAmount.value,
      ]);
    }
  } catch (error) {
    console.log(error);
  }
}

export function decisionAmountPerYear(municipality) {
  const promises = [2020, 2021, 2022].map(async (year) => {
    const response = await getDecisionsCount(municipality, year);

    if (response.error !== null) {
      throw Error(`Error fetching decision amount for ${year}`);
    } else {
      return [year, response.data.count];
    }
  });
  return Promise.all(promises);
}

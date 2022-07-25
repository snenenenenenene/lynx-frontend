import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(num) {
  num = +num;

  if (isNaN(num)) {
    return 0;
  }

  num = num.toFixed(2);

  return num.replace(/\B(?=(\d{3})+(?!\d)(?=\.))/g, ',');
});

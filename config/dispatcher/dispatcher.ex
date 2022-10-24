defmodule Dispatcher do
  use Matcher

  define_accept_types [
    any: ["*/*"],
    turtle: ["text/turtle", "application/n-triples"],
    html: [ "text/html", "application/xhtml+html" ],
    json: [ "application/json", "application/vnd.api+json" ]
  ]

  @any %{ accept: %{ any: true } }
  @turtle %{ accept: %{ turtle: true } }
  @html %{ accept: %{ html: true } }
  @json %{ accept: %{ json: true } }


  # Handle OPTIONS preflight HTTP request
  options "/*" do
    conn
    |> Plug.Conn.put_resp_header( "access-control-allow-headers", "content-type,accept" )
    |> Plug.Conn.put_resp_header( "access-control-allow-methods", "*" )
    |> send_resp( 200, "{ \"message\": \"ok\" }" )
  end


  ###############################################################
  # General/Shared
  ###############################################################

  get "/files/*path", @json do
    Proxy.forward conn, path, "http://resources/files/"
  end

  match "/files/*path", @json do
    Proxy.forward conn, path, "http://file/files/"
  end

  get "/files/:id/download", @any do
    Proxy.forward conn, [], "http://file/files/" <> id <> "/download"
  end

  match "/text-extractor/*path", @json do
    Proxy.forward conn, path, "http://tika-text-extractor/"
  end

  get "/resources/*path", @json do
    Proxy.forward conn, path, "http://resources/"
  end

  get "/aggregations/*path", @json do
    Proxy.forward conn, path, "http://aggregations/"
  end

  get "/search/*path", @json do
    Proxy.forward conn, path, "http://search/"
  end

  match "/search/*path", @json do
    Proxy.forward conn, path, "http://search/"
  end

  match "/embed-search-term/*path", @json do
    Proxy.forward conn, path, "http://poc-ai-embed:8080/"
  end

  #################################################################
  # Fallback
  #################################################################

  match "/*_", %{ last_call: true } do
    send_resp( conn, 404, "Route not found.  See config/dispatcher.ex" )
  end
end

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

  get "/bestuurseenheden/*path", @json do
    Proxy.forward conn, path, "http://resources/bestuurseenheden/"
  end

  get "/werkingsgebieden/*path", @json do
    Proxy.forward conn, path, "http://resources/werkingsgebieden/"
  end

  get "/bestuurseenheid-classificatie-codes/*path", @json do
    Proxy.forward conn, path, "http://resources/bestuurseenheid-classificatie-codes/"
  end

  get "/bestuursorganen/*path", @json do
    Proxy.forward conn, path, "http://resources/bestuursorganen/"
  end

  get "/bestuursorgaan-classificatie-codes/*path", @json do
    Proxy.forward conn, path, "http://resources/bestuursorgaan-classificatie-codes/"
  end

  get "/files/*path", @json do
    Proxy.forward conn, path, "http://resource/files/"
  end

  get "/files/:id/download", @any do
    Proxy.forward conn, [], "http://file/files/" <> id <> "/download"
  end

  get "/submissions/*path", @json do
    Proxy.forward conn, path, "http://resources/submissions/"
  end


  ###############################################################
  # LYNX backend
  ###############################################################

  match "/tax-categories/*path", @json do
    Proxy.forward conn, path, "http://resources/tax-categories/"
  end

  match "/mar-codes/*path", @json do
    Proxy.forward conn, path, "http://resources/mar-codes/"
  end

  match "/tax-reports/*path", @json do
    Proxy.forward conn, path, "http://resources/tax-reports/"
  end

  get "/aggregations/*path", @json do
    Proxy.forward conn, path, "http://aggregations/"
  end


  #################################################################
  # Fallback
  #################################################################

  match "/*_", %{ last_call: true } do
    send_resp( conn, 404, "Route not found.  See config/dispatcher.ex" )
  end
end

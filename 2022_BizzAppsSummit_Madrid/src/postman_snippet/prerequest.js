const authRequest = {
    url: 'https://login.microsoftonline.com/{add Azure tenant ID here}/oauth2/token',
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
      'X-Foo': 'bar'
    },
    body: {
      mode: 'formdata',
      formdata: [ 
          {"key":"grant_type", "value": "client_credentials"},
          {"key":"client_id", "value":  "{add client ID here}"},
          {"key":"client_secret", "value": "{add client secret here}"},
          {"key":"resource", "value": "https://api.ci.ai.microsoft.com"}
      ]
    }
  };
  
  pm.sendRequest(authRequest, (error, response) => {
    console.log(error ? "Auth error: " + error : "Auth succesful");
    
    if (!error) {
        pm.request.headers.add({
            key: 'Authorization',
            value: "Bearer " + response.json().access_token
        })
    }
  });
::::docs-panel{id=left target=#api-Routes-getRouteAsGPX}

### 경로 GPX 내보내기 (getRouteAsGPX)

경로의 GPX 파일을 반환합니다. 전용 경로에 read_all 범위가 필요합니다.
:docs-http-method{method=get url=/routes/&lbrace;id&rbrace;/export_gpx}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="경로의 식별자입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="경로가 포함된 GPX 파일입니다."
}
:docs-table-row{
name="HTTP code 4xx, 5xx"
description="<a href='/docs/reference/#api-models-Fault'>오류</a> 의 원인을 설명하는 오류입니다."
}
:::

::::

::::docs-panel{#right}

:::docs-tab{language=HTTPPie}

``` shell 
$ http GET "https://www.strava.com/api/v3/routes/{id}/export_gpx" "Authorization: Bearer [[token]]"
```

:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.RoutesApi;

import rx.Observable;

public class RoutesApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    RoutesApi api = client.createService(RoutesApi.class);

    Long id = 789; // Long | The identifier of the route.

    apiInstance.getRouteAsGPX(id);
  }
}
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the route.

STRVRoutesApi *apiInstance = [[STRVRoutesApi alloc] init];

// Export Route GPX
[apiInstance getRouteAsGPXWith:id
              completionHandler: ^(NSError* error) {
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

:::

:::docs-tab{language=javaScript}

```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.RoutesApi()

var id = 789; // {Long} The identifier of the route.


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
};
api.getRouteAsGPX(id, callback);
```

:::

:::docs-tab{language=C#}

```c#
using System;
using System.Diagnostics;
using com.strava.api.v3.Api;
using com.strava.api.v3.Client;
using com.strava.api.v3.Model;

namespace Example
{
    public class getRouteAsGPXExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RoutesApi();
            var id = 789;  // Long | The identifier of the route.

            try
            {
                // Export Route GPX
                apiInstance.getRouteAsGPX(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RoutesApi.getRouteAsGPX: " + e.Message );
            }
        }
    }
}
```

:::

:::docs-tab{language=Python}

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure OAuth2 access token for authorization: strava_oauth
swagger_client.configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.RoutesApi()
id = 789 # Long | The identifier of the route.

try: 
    # Export Route GPX
    api_instance.getRouteAsGPX(id)
except ApiException as e:
    print("Exception when calling RoutesApi->getRouteAsGPX: %s\n" % e)
```

:::

::::

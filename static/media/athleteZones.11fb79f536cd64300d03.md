::::docs-panel{id=left target=#api-Athletes-getLoggedInAthleteZones}

### 영역 가져오기 (getLoggedInAthleteZones)

인증된 선수의 심박수와 파워 존을 반환합니다. 프로필 필요: read_all.

:docs-http-method{method=get url=/athlete/zones}

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="심박수와 파워존. <a href='/docs/reference/#api-models-Zones'>Zones</a>의 인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/athlete/zones" "Authorization: Bearer [[token]]"

```

```json
[
  {
    "distribution_buckets": [
      {
        "max": 0,
        "min": 0,
        "time": 1498
      },
      {
        "max": 50,
        "min": 0,
        "time": 62
      },
      {
        "max": 100,
        "min": 50,
        "time": 169
      },
      {
        "max": 150,
        "min": 100,
        "time": 536
      },
      {
        "max": 200,
        "min": 150,
        "time": 672
      },
      {
        "max": 250,
        "min": 200,
        "time": 821
      },
      {
        "max": 300,
        "min": 250,
        "time": 529
      },
      {
        "max": 350,
        "min": 300,
        "time": 251
      },
      {
        "max": 400,
        "min": 350,
        "time": 80
      },
      {
        "max": 450,
        "min": 400,
        "time": 81
      },
      {
        "max": -1,
        "min": 450,
        "time": 343
      }
    ],
    "type": "power",
    "resource_state": 3,
    "sensor_based": true
  }
]
```

:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.AthletesApi;

import rx.Observable;

public class AthletesApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    AthletesApi api = client.createService(AthletesApi.class);


    Observable<Zones> result = apiInstance.getLoggedInAthleteZones();
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
[
  {
    "distribution_buckets": [
      {
        "max": 0,
        "min": 0,
        "time": 1498
      },
      {
        "max": 50,
        "min": 0,
        "time": 62
      },
      {
        "max": 100,
        "min": 50,
        "time": 169
      },
      {
        "max": 150,
        "min": 100,
        "time": 536
      },
      {
        "max": 200,
        "min": 150,
        "time": 672
      },
      {
        "max": 250,
        "min": 200,
        "time": 821
      },
      {
        "max": 300,
        "min": 250,
        "time": 529
      },
      {
        "max": 350,
        "min": 300,
        "time": 251
      },
      {
        "max": 400,
        "min": 350,
        "time": 80
      },
      {
        "max": 450,
        "min": 400,
        "time": 81
      },
      {
        "max": -1,
        "min": 450,
        "time": 343
      }
    ],
    "type": "power",
    "resource_state": 3,
    "sensor_based": true
  }
]
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];


STRVAthletesApi *apiInstance = [[STRVAthletesApi alloc] init];

// Get Zones
[apiInstance getLoggedInAthleteZonesWithCompletionHandler: 
              ^(STRVZones output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

```json
[
  {
    "distribution_buckets": [
      {
        "max": 0,
        "min": 0,
        "time": 1498
      },
      {
        "max": 50,
        "min": 0,
        "time": 62
      },
      {
        "max": 100,
        "min": 50,
        "time": 169
      },
      {
        "max": 150,
        "min": 100,
        "time": 536
      },
      {
        "max": 200,
        "min": 150,
        "time": 672
      },
      {
        "max": 250,
        "min": 200,
        "time": 821
      },
      {
        "max": 300,
        "min": 250,
        "time": 529
      },
      {
        "max": 350,
        "min": 300,
        "time": 251
      },
      {
        "max": 400,
        "min": 350,
        "time": 80
      },
      {
        "max": 450,
        "min": 400,
        "time": 81
      },
      {
        "max": -1,
        "min": 450,
        "time": 343
      }
    ],
    "type": "power",
    "resource_state": 3,
    "sensor_based": true
  }
]
```

:::

:::docs-tab{language=javaScript}

```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.AthletesApi()

var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getLoggedInAthleteZones(callback);
```

```json
[
  {
    "distribution_buckets": [
      {
        "max": 0,
        "min": 0,
        "time": 1498
      },
      {
        "max": 50,
        "min": 0,
        "time": 62
      },
      {
        "max": 100,
        "min": 50,
        "time": 169
      },
      {
        "max": 150,
        "min": 100,
        "time": 536
      },
      {
        "max": 200,
        "min": 150,
        "time": 672
      },
      {
        "max": 250,
        "min": 200,
        "time": 821
      },
      {
        "max": 300,
        "min": 250,
        "time": 529
      },
      {
        "max": 350,
        "min": 300,
        "time": 251
      },
      {
        "max": 400,
        "min": 350,
        "time": 80
      },
      {
        "max": 450,
        "min": 400,
        "time": 81
      },
      {
        "max": -1,
        "min": 450,
        "time": 343
      }
    ],
    "type": "power",
    "resource_state": 3,
    "sensor_based": true
  }
]
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
    public class getLoggedInAthleteZonesExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AthletesApi();

            try
            {
                // Get Zones
                Zones result = apiInstance.getLoggedInAthleteZones();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AthletesApi.getLoggedInAthleteZones: " + e.Message );
            }
        }
    }
}
```

```json
[
  {
    "distribution_buckets": [
      {
        "max": 0,
        "min": 0,
        "time": 1498
      },
      {
        "max": 50,
        "min": 0,
        "time": 62
      },
      {
        "max": 100,
        "min": 50,
        "time": 169
      },
      {
        "max": 150,
        "min": 100,
        "time": 536
      },
      {
        "max": 200,
        "min": 150,
        "time": 672
      },
      {
        "max": 250,
        "min": 200,
        "time": 821
      },
      {
        "max": 300,
        "min": 250,
        "time": 529
      },
      {
        "max": 350,
        "min": 300,
        "time": 251
      },
      {
        "max": 400,
        "min": 350,
        "time": 80
      },
      {
        "max": 450,
        "min": 400,
        "time": 81
      },
      {
        "max": -1,
        "min": 450,
        "time": 343
      }
    ],
    "type": "power",
    "resource_state": 3,
    "sensor_based": true
  }
]
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
api_instance = swagger_client.AthletesApi()

try: 
    # Get Zones
    api_response = api_instance.getLoggedInAthleteZones()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AthletesApi->getLoggedInAthleteZones: %s\n" % e)
```

```json
[
  {
    "distribution_buckets": [
      {
        "max": 0,
        "min": 0,
        "time": 1498
      },
      {
        "max": 50,
        "min": 0,
        "time": 62
      },
      {
        "max": 100,
        "min": 50,
        "time": 169
      },
      {
        "max": 150,
        "min": 100,
        "time": 536
      },
      {
        "max": 200,
        "min": 150,
        "time": 672
      },
      {
        "max": 250,
        "min": 200,
        "time": 821
      },
      {
        "max": 300,
        "min": 250,
        "time": 529
      },
      {
        "max": 350,
        "min": 300,
        "time": 251
      },
      {
        "max": 400,
        "min": 350,
        "time": 80
      },
      {
        "max": 450,
        "min": 400,
        "time": 81
      },
      {
        "max": -1,
        "min": 450,
        "time": 343
      }
    ],
    "type": "power",
    "resource_state": 3,
    "sensor_based": true
  }
]
```

:::

::::

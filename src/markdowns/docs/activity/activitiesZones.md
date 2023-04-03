::::docs-panel{id=left target=#api-Activities-getZonesByActivityId}

### 활동 영역 가져오기 (getZonesByActivityId)

Summit Feature. 지정된 활동의 영역을 반환합니다. 활동 필요: 모든 사람 및 팔로워 활동을 읽습니다.
작업 필요: 나만 작업하려면 read_all.

:docs-http-method{method=get url=/activities/&lbrace;id&rbrace;/zones}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="활동의 식별자 입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="<a href='/docs/reference/#api-models-ActivityZone'>ActivityZone</a> 객체의 배열입니다."
}
:docs-table-row{
name="HTTP code 4xx, 5xx"
description="<a href='/docs/reference/#api-models-Fault'>오류</a>의 원인을 설명하는 오류입니다."
}
:::

::::

::::docs-panel{#right}

:::docs-tab{language=HTTPie}

```shell
$ http GET "https://www.strava.com/api/v3/activities/{id}/zones" "Authorization: Bearer [[token]]"
```

```json
[
  {
    "score": 0,
    "sensor_based": true,
    "custom_zones": true,
    "max": 1,
    "distribution_buckets": "",
    "type": "heartrate",
    "points": 6
  }
]
```

:::

:::docs-tab{language=Java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.ActivitiesApi;

import rx.Observable;

public class ActivitiesApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    ActivitiesApi api = client.createService(ActivitiesApi.class);

    Long id = 789; // Long | The identifier of the activity.

    Observable<List<ActivityZone>> result = apiInstance.getZonesByActivityId(id);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
[
  {
    "score": 0,
    "sensor_based": true,
    "custom_zones": true,
    "max": 1,
    "distribution_buckets": "",
    "type": "heartrate",
    "points": 6
  }
]
```

:::

:::docs-tab{language=Obj-C}

```c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the activity.

STRVActivitiesApi *apiInstance = [[STRVActivitiesApi alloc] init];

// Get Activity Zones
[apiInstance getZonesByActivityIdWith:id
              completionHandler: ^(NSArray<STRVActivityZone>* output, NSError* error) {
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
    "score": 0,
    "sensor_based": true,
    "custom_zones": true,
    "max": 1,
    "distribution_buckets": "",
    "type": "heartrate",
    "points": 6
  }
]
```

:::

:::docs-tab{language=JavaScript}

```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var id = 789; // {Long} The identifier of the activity.


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getZonesByActivityId(id, callback);


```

```json
[
  {
    "score": 0,
    "sensor_based": true,
    "custom_zones": true,
    "max": 1,
    "distribution_buckets": "",
    "type": "heartrate",
    "points": 6
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
    public class getZonesByActivityIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ActivitiesApi();
            var id = 789;  // Long | The identifier of the activity.

            try
            {
                // Get Activity Zones
                array[ActivityZone] result = apiInstance.getZonesByActivityId(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ActivitiesApi.getZonesByActivityId: " + e.Message );
            }
        }
    }
}

```

```json
[
  {
    "score": 0,
    "sensor_based": true,
    "custom_zones": true,
    "max": 1,
    "distribution_buckets": "",
    "type": "heartrate",
    "points": 6
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
api_instance = swagger_client.ActivitiesApi()
id = 789 # Long | The identifier of the activity.

try: 
    # Get Activity Zones
    api_response = api_instance.getZonesByActivityId(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ActivitiesApi->getZonesByActivityId: %s\n" % e)

```

```json
[
  {
    "score": 0,
    "sensor_based": true,
    "custom_zones": true,
    "max": 1,
    "distribution_buckets": "",
    "type": "heartrate",
    "points": 6
  }
]
```

:::

::::

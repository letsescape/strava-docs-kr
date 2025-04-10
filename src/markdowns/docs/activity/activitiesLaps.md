::::docs-panel{id=left target=#api-Activities-getLapsByActivityId}

### 활동 랩의 나열 (getLapsByActivityId)

식별자로 식별된 활동의 랩을 반환합니다. 활동 필요: 모든 사람과 팔로워를 위한 읽기
활동. 작업 필요: 나만 작업하려면 read_all.

:docs-http-method{method=get url=/activities/&lbrace;id&rbrace;/laps}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="활동의 식별자입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="<a href='/docs/reference/#api-models-Lap'>Lap</a> 객체의 배열입니다."
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
$ http GET "https://www.strava.com/api/v3/activities/{id}/laps" "Authorization: Bearer [[token]]"
```

```json
[
  {
    "id": 12345678987654321,
    "resource_state": 2,
    "name": "Lap 1",
    "activity": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "athlete": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "elapsed_time": 1691,
    "moving_time": 1587,
    "start_date": "2018-02-08T14:13:37Z",
    "start_date_local": "2018-02-08T06:13:37Z",
    "distance": 8046.72,
    "start_index": 0,
    "end_index": 1590,
    "total_elevation_gain": 270,
    "average_speed": 4.76,
    "max_speed": 9.4,
    "average_cadence": 79,
    "device_watts": true,
    "average_watts": 228.2,
    "lap_index": 1,
    "split": 1
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

    Observable<List<Lap>> result = apiInstance.getLapsByActivityId(id);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
[
  {
    "id": 12345678987654321,
    "resource_state": 2,
    "name": "Lap 1",
    "activity": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "athlete": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "elapsed_time": 1691,
    "moving_time": 1587,
    "start_date": "2018-02-08T14:13:37Z",
    "start_date_local": "2018-02-08T06:13:37Z",
    "distance": 8046.72,
    "start_index": 0,
    "end_index": 1590,
    "total_elevation_gain": 270,
    "average_speed": 4.76,
    "max_speed": 9.4,
    "average_cadence": 79,
    "device_watts": true,
    "average_watts": 228.2,
    "lap_index": 1,
    "split": 1
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

// List Activity Laps
[apiInstance getLapsByActivityIdWith:id
              completionHandler: ^(NSArray<STRVLap>* output, NSError* error) {
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
    "id": 12345678987654321,
    "resource_state": 2,
    "name": "Lap 1",
    "activity": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "athlete": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "elapsed_time": 1691,
    "moving_time": 1587,
    "start_date": "2018-02-08T14:13:37Z",
    "start_date_local": "2018-02-08T06:13:37Z",
    "distance": 8046.72,
    "start_index": 0,
    "end_index": 1590,
    "total_elevation_gain": 270,
    "average_speed": 4.76,
    "max_speed": 9.4,
    "average_cadence": 79,
    "device_watts": true,
    "average_watts": 228.2,
    "lap_index": 1,
    "split": 1
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
api.getLapsByActivityId(id, callback);
```

```json
[
  {
    "id": 12345678987654321,
    "resource_state": 2,
    "name": "Lap 1",
    "activity": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "athlete": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "elapsed_time": 1691,
    "moving_time": 1587,
    "start_date": "2018-02-08T14:13:37Z",
    "start_date_local": "2018-02-08T06:13:37Z",
    "distance": 8046.72,
    "start_index": 0,
    "end_index": 1590,
    "total_elevation_gain": 270,
    "average_speed": 4.76,
    "max_speed": 9.4,
    "average_cadence": 79,
    "device_watts": true,
    "average_watts": 228.2,
    "lap_index": 1,
    "split": 1
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
    public class getLapsByActivityIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ActivitiesApi();
            var id = 789;  // Long | The identifier of the activity.

            try
            {
                // List Activity Laps
                array[Lap] result = apiInstance.getLapsByActivityId(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ActivitiesApi.getLapsByActivityId: " + e.Message );
            }
        }
    }
}
```

```json
[
  {
    "id": 12345678987654321,
    "resource_state": 2,
    "name": "Lap 1",
    "activity": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "athlete": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "elapsed_time": 1691,
    "moving_time": 1587,
    "start_date": "2018-02-08T14:13:37Z",
    "start_date_local": "2018-02-08T06:13:37Z",
    "distance": 8046.72,
    "start_index": 0,
    "end_index": 1590,
    "total_elevation_gain": 270,
    "average_speed": 4.76,
    "max_speed": 9.4,
    "average_cadence": 79,
    "device_watts": true,
    "average_watts": 228.2,
    "lap_index": 1,
    "split": 1
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
    # List Activity Laps
    api_response = api_instance.getLapsByActivityId(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ActivitiesApi->getLapsByActivityId: %s\n" % e)

```

```json
[
  {
    "id": 12345678987654321,
    "resource_state": 2,
    "name": "Lap 1",
    "activity": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "athlete": {
      "id": 12345678987654321,
      "resource_state": 1
    },
    "elapsed_time": 1691,
    "moving_time": 1587,
    "start_date": "2018-02-08T14:13:37Z",
    "start_date_local": "2018-02-08T06:13:37Z",
    "distance": 8046.72,
    "start_index": 0,
    "end_index": 1590,
    "total_elevation_gain": 270,
    "average_speed": 4.76,
    "max_speed": 9.4,
    "average_cadence": 79,
    "device_watts": true,
    "average_watts": 228.2,
    "lap_index": 1,
    "split": 1
  }
]
```

:::

::::

::::docs-panel{id=left target=#api-Routes-getRouteById}

### 경로 가져오기 (getRouteById)

식별자를 사용하여 경로를 반환합니다. 전용 경로에 read_all 범위 필요

:docs-http-method{method=get url=/routes/&lbrace;id&rbrace;}

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
description="경로를 나타냅니다. <a href='/docs/reference/#api-models-Route'>Route</a>의 인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/routes/{id}" "Authorization: Bearer [[token]]"
```

```json
{
  "private": true,
  "distance": 0.8008282,
  "athlete": "",
  "description": "aeiou",
  "created_at": "2000-01-23T04:56:07.000+00:00",
  "elevation_gain": 6.0274563,
  "type": 5,
  "estimated_moving_time": 7,
  "segments": [
    {
      "country": "aeiou",
      "private": true,
      "distance": 3.6160767,
      "average_grade": 2.027123,
      "maximum_grade": 4.145608,
      "climb_category": 1,
      "city": "aeiou",
      "elevation_high": 7.386282,
      "athlete_pr_effort": {
        "distance": 1.1730742,
        "start_date_local": "2000-01-23T04:56:07.000+00:00",
        "activity_id": 6,
        "elapsed_time": 7,
        "is_kom": true,
        "id": 1,
        "start_date": "2000-01-23T04:56:07.000+00:00"
      },
      "athlete_segment_stats": {
        "pr_elapsed_time": 5,
        "pr_date": "2000-01-23T04:56:07.000+00:00",
        "effort_count": 9,
        "pr_activity_id": 4
      },
      "start_latlng": "",
      "elevation_low": 1.2315135,
      "end_latlng": "",
      "activity_type": "Ride",
      "name": "aeiou",
      "id": 9,
      "state": "aeiou"
    }
  ],
  "starred": true,
  "updated_at": "2000-01-23T04:56:07.000+00:00",
  "sub_type": 2,
  "id_str": "aeiou",
  "name": "aeiou",
  "id": 1,
  "map": {
    "summary_polyline": "aeiou",
    "id": "aeiou",
    "polyline": "aeiou"
  },
  "timestamp": 5
}
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

    Observable<Route> result = apiInstance.getRouteById(id);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
{
  "private": true,
  "distance": 0.8008282,
  "athlete": "",
  "description": "aeiou",
  "created_at": "2000-01-23T04:56:07.000+00:00",
  "elevation_gain": 6.0274563,
  "type": 5,
  "estimated_moving_time": 7,
  "segments": [
    {
      "country": "aeiou",
      "private": true,
      "distance": 3.6160767,
      "average_grade": 2.027123,
      "maximum_grade": 4.145608,
      "climb_category": 1,
      "city": "aeiou",
      "elevation_high": 7.386282,
      "athlete_pr_effort": {
        "distance": 1.1730742,
        "start_date_local": "2000-01-23T04:56:07.000+00:00",
        "activity_id": 6,
        "elapsed_time": 7,
        "is_kom": true,
        "id": 1,
        "start_date": "2000-01-23T04:56:07.000+00:00"
      },
      "athlete_segment_stats": {
        "pr_elapsed_time": 5,
        "pr_date": "2000-01-23T04:56:07.000+00:00",
        "effort_count": 9,
        "pr_activity_id": 4
      },
      "start_latlng": "",
      "elevation_low": 1.2315135,
      "end_latlng": "",
      "activity_type": "Ride",
      "name": "aeiou",
      "id": 9,
      "state": "aeiou"
    }
  ],
  "starred": true,
  "updated_at": "2000-01-23T04:56:07.000+00:00",
  "sub_type": 2,
  "id_str": "aeiou",
  "name": "aeiou",
  "id": 1,
  "map": {
    "summary_polyline": "aeiou",
    "id": "aeiou",
    "polyline": "aeiou"
  },
  "timestamp": 5
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

// Get Route
[apiInstance getRouteByIdWith:id
              completionHandler: ^(STRVRoute output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

```json
{
  "private": true,
  "distance": 0.8008282,
  "athlete": "",
  "description": "aeiou",
  "created_at": "2000-01-23T04:56:07.000+00:00",
  "elevation_gain": 6.0274563,
  "type": 5,
  "estimated_moving_time": 7,
  "segments": [
    {
      "country": "aeiou",
      "private": true,
      "distance": 3.6160767,
      "average_grade": 2.027123,
      "maximum_grade": 4.145608,
      "climb_category": 1,
      "city": "aeiou",
      "elevation_high": 7.386282,
      "athlete_pr_effort": {
        "distance": 1.1730742,
        "start_date_local": "2000-01-23T04:56:07.000+00:00",
        "activity_id": 6,
        "elapsed_time": 7,
        "is_kom": true,
        "id": 1,
        "start_date": "2000-01-23T04:56:07.000+00:00"
      },
      "athlete_segment_stats": {
        "pr_elapsed_time": 5,
        "pr_date": "2000-01-23T04:56:07.000+00:00",
        "effort_count": 9,
        "pr_activity_id": 4
      },
      "start_latlng": "",
      "elevation_low": 1.2315135,
      "end_latlng": "",
      "activity_type": "Ride",
      "name": "aeiou",
      "id": 9,
      "state": "aeiou"
    }
  ],
  "starred": true,
  "updated_at": "2000-01-23T04:56:07.000+00:00",
  "sub_type": 2,
  "id_str": "aeiou",
  "name": "aeiou",
  "id": 1,
  "map": {
    "summary_polyline": "aeiou",
    "id": "aeiou",
    "polyline": "aeiou"
  },
  "timestamp": 5
}
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
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getRouteById(id, callback);
```

```json
{
  "private": true,
  "distance": 0.8008282,
  "athlete": "",
  "description": "aeiou",
  "created_at": "2000-01-23T04:56:07.000+00:00",
  "elevation_gain": 6.0274563,
  "type": 5,
  "estimated_moving_time": 7,
  "segments": [
    {
      "country": "aeiou",
      "private": true,
      "distance": 3.6160767,
      "average_grade": 2.027123,
      "maximum_grade": 4.145608,
      "climb_category": 1,
      "city": "aeiou",
      "elevation_high": 7.386282,
      "athlete_pr_effort": {
        "distance": 1.1730742,
        "start_date_local": "2000-01-23T04:56:07.000+00:00",
        "activity_id": 6,
        "elapsed_time": 7,
        "is_kom": true,
        "id": 1,
        "start_date": "2000-01-23T04:56:07.000+00:00"
      },
      "athlete_segment_stats": {
        "pr_elapsed_time": 5,
        "pr_date": "2000-01-23T04:56:07.000+00:00",
        "effort_count": 9,
        "pr_activity_id": 4
      },
      "start_latlng": "",
      "elevation_low": 1.2315135,
      "end_latlng": "",
      "activity_type": "Ride",
      "name": "aeiou",
      "id": 9,
      "state": "aeiou"
    }
  ],
  "starred": true,
  "updated_at": "2000-01-23T04:56:07.000+00:00",
  "sub_type": 2,
  "id_str": "aeiou",
  "name": "aeiou",
  "id": 1,
  "map": {
    "summary_polyline": "aeiou",
    "id": "aeiou",
    "polyline": "aeiou"
  },
  "timestamp": 5
}
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
    public class getRouteByIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RoutesApi();
            var id = 789;  // Long | The identifier of the route.

            try
            {
                // Get Route
                Route result = apiInstance.getRouteById(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RoutesApi.getRouteById: " + e.Message );
            }
        }
    }
}
```

```json
{
  "private": true,
  "distance": 0.8008282,
  "athlete": "",
  "description": "aeiou",
  "created_at": "2000-01-23T04:56:07.000+00:00",
  "elevation_gain": 6.0274563,
  "type": 5,
  "estimated_moving_time": 7,
  "segments": [
    {
      "country": "aeiou",
      "private": true,
      "distance": 3.6160767,
      "average_grade": 2.027123,
      "maximum_grade": 4.145608,
      "climb_category": 1,
      "city": "aeiou",
      "elevation_high": 7.386282,
      "athlete_pr_effort": {
        "distance": 1.1730742,
        "start_date_local": "2000-01-23T04:56:07.000+00:00",
        "activity_id": 6,
        "elapsed_time": 7,
        "is_kom": true,
        "id": 1,
        "start_date": "2000-01-23T04:56:07.000+00:00"
      },
      "athlete_segment_stats": {
        "pr_elapsed_time": 5,
        "pr_date": "2000-01-23T04:56:07.000+00:00",
        "effort_count": 9,
        "pr_activity_id": 4
      },
      "start_latlng": "",
      "elevation_low": 1.2315135,
      "end_latlng": "",
      "activity_type": "Ride",
      "name": "aeiou",
      "id": 9,
      "state": "aeiou"
    }
  ],
  "starred": true,
  "updated_at": "2000-01-23T04:56:07.000+00:00",
  "sub_type": 2,
  "id_str": "aeiou",
  "name": "aeiou",
  "id": 1,
  "map": {
    "summary_polyline": "aeiou",
    "id": "aeiou",
    "polyline": "aeiou"
  },
  "timestamp": 5
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
    # Get Route
    api_response = api_instance.getRouteById(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RoutesApi->getRouteById: %s\n" % e)

```

```json
{
  "private": true,
  "distance": 0.8008282,
  "athlete": "",
  "description": "aeiou",
  "created_at": "2000-01-23T04:56:07.000+00:00",
  "elevation_gain": 6.0274563,
  "type": 5,
  "estimated_moving_time": 7,
  "segments": [
    {
      "country": "aeiou",
      "private": true,
      "distance": 3.6160767,
      "average_grade": 2.027123,
      "maximum_grade": 4.145608,
      "climb_category": 1,
      "city": "aeiou",
      "elevation_high": 7.386282,
      "athlete_pr_effort": {
        "distance": 1.1730742,
        "start_date_local": "2000-01-23T04:56:07.000+00:00",
        "activity_id": 6,
        "elapsed_time": 7,
        "is_kom": true,
        "id": 1,
        "start_date": "2000-01-23T04:56:07.000+00:00"
      },
      "athlete_segment_stats": {
        "pr_elapsed_time": 5,
        "pr_date": "2000-01-23T04:56:07.000+00:00",
        "effort_count": 9,
        "pr_activity_id": 4
      },
      "start_latlng": "",
      "elevation_low": 1.2315135,
      "end_latlng": "",
      "activity_type": "Ride",
      "name": "aeiou",
      "id": 9,
      "state": "aeiou"
    }
  ],
  "starred": true,
  "updated_at": "2000-01-23T04:56:07.000+00:00",
  "sub_type": 2,
  "id_str": "aeiou",
  "name": "aeiou",
  "id": 1,
  "map": {
    "summary_polyline": "aeiou",
    "id": "aeiou",
    "polyline": "aeiou"
  },
  "timestamp": 5
}
```

:::

::::

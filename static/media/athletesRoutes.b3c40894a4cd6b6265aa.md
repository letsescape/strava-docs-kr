::::docs-panel{id=left target=#api-Routes-getRoutesByAthleteId}

### 선수 경로 나열 (getRoutesByAthleteId)

인증된 선수가 만든 경로 목록을 반환합니다. read_all 범위를 가진 토큰에서 요청하지 않는 한 개인 경로는 필터링됩니다.
:docs-http-method{method=get url=/athletes/&lbrace;id&rbrace;/routes}

#### Parameters

:::docs-table
:docs-table-row{
name="page"
requiredText="Integer, in query"
description="페이지 번호. 기본값은 1입니다."
}
:docs-table-row{
name="per_page"
requiredText="Integer, in query"
description="페이지당 항목 수입니다. 기본값은 30입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="<a href='/docs/reference/#api-models-Route'>Route</a> 체의 배열입니다."
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
$ http GET "https://www.strava.com/api/v3/athletes/{id}/routes?page=&per_page=" "Authorization: Bearer [[token]]"
```

```json
[
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
]
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

    Integer page = 56; // Integer | Page number. Defaults to 1.
    Integer perPage = 56; // Integer | Number of items per page. Defaults to 30.

    Observable<List<Route>> result = apiInstance.getRoutesByAthleteId(page, perPage);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```

```json
[
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
]
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Integer *page = 56; // Page number. Defaults to 1. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVRoutesApi *apiInstance = [[STRVRoutesApi alloc] init];

// List Athlete Routes
[apiInstance getRoutesByAthleteIdWith:page
    perPage:perPage
              completionHandler: ^(NSArray<STRVRoute>* output, NSError* error) {
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

var api = new StravaApiV3.RoutesApi()

var opts = {
    'page': 56, // {Integer} Page number. Defaults to 1.
    'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
};

var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getRoutesByAthleteId(opts, callback);

```

```json
[
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
    public class getRoutesByAthleteIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RoutesApi();
            var page = 56;  // Integer | Page number. Defaults to 1. (optional) 
            var perPage = 56;  // Integer | Number of items per page. Defaults to 30. (optional)  (default to 30)

            try
            {
                // List Athlete Routes
                array[Route] result = apiInstance.getRoutesByAthleteId(page, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling RoutesApi.getRoutesByAthleteId: " + e.Message );
            }
        }
    }
}

```

```json
[
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
api_instance = swagger_client.RoutesApi()
page = 56 # Integer | Page number. Defaults to 1. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Athlete Routes
    api_response = api_instance.getRoutesByAthleteId(page=page, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RoutesApi->getRoutesByAthleteId: %s\n" % e)

```

```json
[
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
]
```

:::

::::

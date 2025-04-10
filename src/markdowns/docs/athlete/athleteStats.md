::::docs-panel{id=left target=#api-Athletes-getStats}

### 선수 통계 가져오기 (getStats)
선수의 활동 통계를 반환합니다. 모든 사용자의 가시성으로 설정된 활동의 데이터만 포함합니다.

:docs-http-method{method=get url=/athlete/&lbrace;id&rbrace;/stats}


#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="운동선수의 식별자. 인증된 선수와 일치해야 합니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description=" 선수의 활동 통계. <a href='/docs/reference/#api-models-ActivityStats'>ActivityStats</a>의 인스턴스 입니다. "
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
$ http GET "https://www.strava.com/api/v3/athletes/{id}/stats" "Authorization: Bearer [[token]]"
```
```json
{
  "recent_run_totals" : "",
  "all_run_totals" : "",
  "recent_swim_totals" : "",
  "biggest_ride_distance" : 0.8008281904610115,
  "ytd_swim_totals" : "",
  "all_swim_totals" : "",
  "recent_ride_totals" : {
    "distance" : 5.962134,
    "achievement_count" : 9,
    "count" : 1,
    "elapsed_time" : 2,
    "elevation_gain" : 7.0614014,
    "moving_time" : 5
  },
  "biggest_climb_elevation_gain" : 6.027456183070403,
  "ytd_ride_totals" : "",
  "all_ride_totals" : "",
  "ytd_run_totals" : ""
}
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

    Long id = 789; // Long | The identifier of the athlete. Must match the authenticated athlete.

    Observable<ActivityStats> result = apiInstance.getStats(id);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```
```json
{
  "recent_run_totals" : "",
  "all_run_totals" : "",
  "recent_swim_totals" : "",
  "biggest_ride_distance" : 0.8008281904610115,
  "ytd_swim_totals" : "",
  "all_swim_totals" : "",
  "recent_ride_totals" : {
    "distance" : 5.962134,
    "achievement_count" : 9,
    "count" : 1,
    "elapsed_time" : 2,
    "elevation_gain" : 7.0614014,
    "moving_time" : 5
  },
  "biggest_climb_elevation_gain" : 6.027456183070403,
  "ytd_ride_totals" : "",
  "all_ride_totals" : "",
  "ytd_run_totals" : ""
}
```
:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the athlete. Must match the authenticated athlete.

STRVAthletesApi *apiInstance = [[STRVAthletesApi alloc] init];

// Get Athlete Stats
[apiInstance getStatsWith:id
              completionHandler: ^(STRVActivityStats output, NSError* error) {
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
  "recent_run_totals" : "",
  "all_run_totals" : "",
  "recent_swim_totals" : "",
  "biggest_ride_distance" : 0.8008281904610115,
  "ytd_swim_totals" : "",
  "all_swim_totals" : "",
  "recent_ride_totals" : {
    "distance" : 5.962134,
    "achievement_count" : 9,
    "count" : 1,
    "elapsed_time" : 2,
    "elevation_gain" : 7.0614014,
    "moving_time" : 5
  },
  "biggest_climb_elevation_gain" : 6.027456183070403,
  "ytd_ride_totals" : "",
  "all_ride_totals" : "",
  "ytd_run_totals" : ""
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

var api = new StravaApiV3.AthletesApi()

var id = 789; // {Long} The identifier of the athlete. Must match the authenticated athlete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getStats(id, callback);
```
```json
{
  "recent_run_totals" : "",
  "all_run_totals" : "",
  "recent_swim_totals" : "",
  "biggest_ride_distance" : 0.8008281904610115,
  "ytd_swim_totals" : "",
  "all_swim_totals" : "",
  "recent_ride_totals" : {
    "distance" : 5.962134,
    "achievement_count" : 9,
    "count" : 1,
    "elapsed_time" : 2,
    "elevation_gain" : 7.0614014,
    "moving_time" : 5
  },
  "biggest_climb_elevation_gain" : 6.027456183070403,
  "ytd_ride_totals" : "",
  "all_ride_totals" : "",
  "ytd_run_totals" : ""
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
    public class getStatsExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AthletesApi();
            var id = 789;  // Long | The identifier of the athlete. Must match the authenticated athlete.

            try
            {
                // Get Athlete Stats
                ActivityStats result = apiInstance.getStats(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AthletesApi.getStats: " + e.Message );
            }
        }
    }
}
```
```json
{
  "recent_run_totals" : "",
  "all_run_totals" : "",
  "recent_swim_totals" : "",
  "biggest_ride_distance" : 0.8008281904610115,
  "ytd_swim_totals" : "",
  "all_swim_totals" : "",
  "recent_ride_totals" : {
    "distance" : 5.962134,
    "achievement_count" : 9,
    "count" : 1,
    "elapsed_time" : 2,
    "elevation_gain" : 7.0614014,
    "moving_time" : 5
  },
  "biggest_climb_elevation_gain" : 6.027456183070403,
  "ytd_ride_totals" : "",
  "all_ride_totals" : "",
  "ytd_run_totals" : ""
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
api_instance = swagger_client.AthletesApi()
id = 789 # Long | The identifier of the athlete. Must match the authenticated athlete.

try: 
    # Get Athlete Stats
    api_response = api_instance.getStats(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AthletesApi->getStats: %s\n" % e)
```
```json
{
  "recent_run_totals" : "",
  "all_run_totals" : "",
  "recent_swim_totals" : "",
  "biggest_ride_distance" : 0.8008281904610115,
  "ytd_swim_totals" : "",
  "all_swim_totals" : "",
  "recent_ride_totals" : {
    "distance" : 5.962134,
    "achievement_count" : 9,
    "count" : 1,
    "elapsed_time" : 2,
    "elevation_gain" : 7.0614014,
    "moving_time" : 5
  },
  "biggest_climb_elevation_gain" : 6.027456183070403,
  "ytd_ride_totals" : "",
  "all_ride_totals" : "",
  "ytd_run_totals" : ""
}
```
:::

::::

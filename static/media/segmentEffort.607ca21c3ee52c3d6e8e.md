::::docs-panel{id=left target=#api-SegmentEfforts-getSegmentEffortById}

### 세그먼트 노력 가져오기 (getSegmentEffortById)

인증된 선수가 소유한 활동의 세그먼트 노력을 반환합니다. 구독이 필요합니다.
:docs-http-method{method=get url=/segment_efforts/&lbrace;id&rbrace;}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="세그먼트 노력의 식별자입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="세그먼트 노력을 나타냅니다. <a href='/docs/reference/#api-models-DetailedSegmentEffort'>DetailedSegmentEffort</a>의
인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/segment_efforts/{id}" "Authorization: Bearer [[token]]"

```

```json
{
  "id": 1234556789,
  "resource_state": 3,
  "name": "Alpe d'Huez",
  "activity": {
    "id": 3454504,
    "resource_state": 1
  },
  "athlete": {
    "id": 54321,
    "resource_state": 1
  },
  "elapsed_time": 381,
  "moving_time": 340,
  "start_date": "2018-02-12T16:12:41Z",
  "start_date_local": "2018-02-12T08:12:41Z",
  "distance": 83,
  "start_index": 65,
  "end_index": 83,
  "segment": {
    "id": 63450,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity_type": "Run",
    "distance": 780.35,
    "average_grade": -0.5,
    "maximum_grade": 0,
    "elevation_high": 21,
    "elevation_low": 17.2,
    "start_latlng": [
      37.808407654682,
      -122.426682919323
    ],
    "end_latlng": [
      37.808297909724,
      -122.421324329674
    ],
    "climb_category": 0,
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "private": false,
    "hazardous": false,
    "starred": false
  },
  "kom_rank": null,
  "pr_rank": null,
  "achievements": [],
  "athlete_segment_stats": {
    "pr_elapsed_time": 212,
    "pr_date": "2015-02-12",
    "effort_count": 149
  }
}
```

:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.SegmentEffortsApi;

import rx.Observable;

public class SegmentEffortsApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    SegmentEffortsApi api = client.createService(SegmentEffortsApi.class);

    Long id = 789; // Long | The identifier of the segment effort.

    Observable<DetailedSegmentEffort> result = apiInstance.getSegmentEffortById(id);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```

```json
{
  "id": 1234556789,
  "resource_state": 3,
  "name": "Alpe d'Huez",
  "activity": {
    "id": 3454504,
    "resource_state": 1
  },
  "athlete": {
    "id": 54321,
    "resource_state": 1
  },
  "elapsed_time": 381,
  "moving_time": 340,
  "start_date": "2018-02-12T16:12:41Z",
  "start_date_local": "2018-02-12T08:12:41Z",
  "distance": 83,
  "start_index": 65,
  "end_index": 83,
  "segment": {
    "id": 63450,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity_type": "Run",
    "distance": 780.35,
    "average_grade": -0.5,
    "maximum_grade": 0,
    "elevation_high": 21,
    "elevation_low": 17.2,
    "start_latlng": [
      37.808407654682,
      -122.426682919323
    ],
    "end_latlng": [
      37.808297909724,
      -122.421324329674
    ],
    "climb_category": 0,
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "private": false,
    "hazardous": false,
    "starred": false
  },
  "kom_rank": null,
  "pr_rank": null,
  "achievements": [],
  "athlete_segment_stats": {
    "pr_elapsed_time": 212,
    "pr_date": "2015-02-12",
    "effort_count": 149
  }
}
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the segment effort.

STRVSegmentEffortsApi *apiInstance = [[STRVSegmentEffortsApi alloc] init];

// Get Segment Effort
[apiInstance getSegmentEffortByIdWith:id
              completionHandler: ^(STRVDetailedSegmentEffort output, NSError* error) {
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
  "id": 1234556789,
  "resource_state": 3,
  "name": "Alpe d'Huez",
  "activity": {
    "id": 3454504,
    "resource_state": 1
  },
  "athlete": {
    "id": 54321,
    "resource_state": 1
  },
  "elapsed_time": 381,
  "moving_time": 340,
  "start_date": "2018-02-12T16:12:41Z",
  "start_date_local": "2018-02-12T08:12:41Z",
  "distance": 83,
  "start_index": 65,
  "end_index": 83,
  "segment": {
    "id": 63450,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity_type": "Run",
    "distance": 780.35,
    "average_grade": -0.5,
    "maximum_grade": 0,
    "elevation_high": 21,
    "elevation_low": 17.2,
    "start_latlng": [
      37.808407654682,
      -122.426682919323
    ],
    "end_latlng": [
      37.808297909724,
      -122.421324329674
    ],
    "climb_category": 0,
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "private": false,
    "hazardous": false,
    "starred": false
  },
  "kom_rank": null,
  "pr_rank": null,
  "achievements": [],
  "athlete_segment_stats": {
    "pr_elapsed_time": 212,
    "pr_date": "2015-02-12",
    "effort_count": 149
  }
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

var api = new StravaApiV3.SegmentEffortsApi()

var id = 789; // {Long} The identifier of the segment effort.


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getSegmentEffortById(id, callback);

```

```json
{
  "id": 1234556789,
  "resource_state": 3,
  "name": "Alpe d'Huez",
  "activity": {
    "id": 3454504,
    "resource_state": 1
  },
  "athlete": {
    "id": 54321,
    "resource_state": 1
  },
  "elapsed_time": 381,
  "moving_time": 340,
  "start_date": "2018-02-12T16:12:41Z",
  "start_date_local": "2018-02-12T08:12:41Z",
  "distance": 83,
  "start_index": 65,
  "end_index": 83,
  "segment": {
    "id": 63450,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity_type": "Run",
    "distance": 780.35,
    "average_grade": -0.5,
    "maximum_grade": 0,
    "elevation_high": 21,
    "elevation_low": 17.2,
    "start_latlng": [
      37.808407654682,
      -122.426682919323
    ],
    "end_latlng": [
      37.808297909724,
      -122.421324329674
    ],
    "climb_category": 0,
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "private": false,
    "hazardous": false,
    "starred": false
  },
  "kom_rank": null,
  "pr_rank": null,
  "achievements": [],
  "athlete_segment_stats": {
    "pr_elapsed_time": 212,
    "pr_date": "2015-02-12",
    "effort_count": 149
  }
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
    public class getSegmentEffortByIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SegmentEffortsApi();
            var id = 789;  // Long | The identifier of the segment effort.

            try
            {
                // Get Segment Effort
                DetailedSegmentEffort result = apiInstance.getSegmentEffortById(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SegmentEffortsApi.getSegmentEffortById: " + e.Message );
            }
        }
    }
}

```

```json
{
  "id": 1234556789,
  "resource_state": 3,
  "name": "Alpe d'Huez",
  "activity": {
    "id": 3454504,
    "resource_state": 1
  },
  "athlete": {
    "id": 54321,
    "resource_state": 1
  },
  "elapsed_time": 381,
  "moving_time": 340,
  "start_date": "2018-02-12T16:12:41Z",
  "start_date_local": "2018-02-12T08:12:41Z",
  "distance": 83,
  "start_index": 65,
  "end_index": 83,
  "segment": {
    "id": 63450,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity_type": "Run",
    "distance": 780.35,
    "average_grade": -0.5,
    "maximum_grade": 0,
    "elevation_high": 21,
    "elevation_low": 17.2,
    "start_latlng": [
      37.808407654682,
      -122.426682919323
    ],
    "end_latlng": [
      37.808297909724,
      -122.421324329674
    ],
    "climb_category": 0,
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "private": false,
    "hazardous": false,
    "starred": false
  },
  "kom_rank": null,
  "pr_rank": null,
  "achievements": [],
  "athlete_segment_stats": {
    "pr_elapsed_time": 212,
    "pr_date": "2015-02-12",
    "effort_count": 149
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
api_instance = swagger_client.SegmentEffortsApi()
id = 789 # Long | The identifier of the segment effort.

try: 
    # Get Segment Effort
    api_response = api_instance.getSegmentEffortById(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SegmentEffortsApi->getSegmentEffortById: %s\n" % e)

```

```json
{
  "id": 1234556789,
  "resource_state": 3,
  "name": "Alpe d'Huez",
  "activity": {
    "id": 3454504,
    "resource_state": 1
  },
  "athlete": {
    "id": 54321,
    "resource_state": 1
  },
  "elapsed_time": 381,
  "moving_time": 340,
  "start_date": "2018-02-12T16:12:41Z",
  "start_date_local": "2018-02-12T08:12:41Z",
  "distance": 83,
  "start_index": 65,
  "end_index": 83,
  "segment": {
    "id": 63450,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity_type": "Run",
    "distance": 780.35,
    "average_grade": -0.5,
    "maximum_grade": 0,
    "elevation_high": 21,
    "elevation_low": 17.2,
    "start_latlng": [
      37.808407654682,
      -122.426682919323
    ],
    "end_latlng": [
      37.808297909724,
      -122.421324329674
    ],
    "climb_category": 0,
    "city": "San Francisco",
    "state": "CA",
    "country": "United States",
    "private": false,
    "hazardous": false,
    "starred": false
  },
  "kom_rank": null,
  "pr_rank": null,
  "achievements": [],
  "athlete_segment_stats": {
    "pr_elapsed_time": 212,
    "pr_date": "2015-02-12",
    "effort_count": 149
  }
}
```

:::

::::

::::docs-panel{id=left target=#api-SegmentEfforts-getEffortsBySegmentId}

### 세그먼트 작업 나열 (getEffortsBySegmentId)

지정된 세그먼트에 대해 인증된 선수의 세그먼트 노력 집합을 반환합니다. 구독이 필요합니다
:docs-http-method{method=get url=/segment_efforts}

#### Parameters

:::docs-table
:docs-table-row{
name="segment_id"
requiredText="required Integer, in query"
description="세그먼트의 식별자입니다."
}
:docs-table-row{
name="start_date_local"
requiredText="Date, in query"
description="ISO 8601 포맷된 날짜 시간."
}
:docs-table-row{
name="end_date_local"
requiredText="Date, in query"
description="ISO 8601 포맷된 날짜 시간."
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
description="<a href='/docs/reference/#api-models-DetailedSegmentEffort'>DetailedSegmentEffort</a> 객체의 배열입니다."
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
$ http GET "https://www.strava.com/api/v3/segment_efforts?segment_id=&start_date_local=&end_date_local=&per_page=" "Authorization: Bearer [[token]]"
```

```json
[
  {
    "id": 123456789,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity": {
      "id": 1234567890,
      "resource_state": 1
    },
    "athlete": {
      "id": 123445678689,
      "resource_state": 1
    },
    "elapsed_time": 1657,
    "moving_time": 1642,
    "start_date": "2007-09-15T08:15:29Z",
    "start_date_local": "2007-09-15T09:15:29Z",
    "distance": 6148.92,
    "start_index": 1102,
    "end_index": 1366,
    "device_watts": false,
    "average_watts": 220.2,
    "segment": {
      "id": 788127,
      "resource_state": 2,
      "name": "Alpe d'Huez",
      "activity_type": "Ride",
      "distance": 6297.46,
      "average_grade": 4.8,
      "maximum_grade": 16.3,
      "elevation_high": 416,
      "elevation_low": 104.6,
      "start_latlng": [
        52.98501000581467,
        -3.1869720001197366
      ],
      "end_latlng": [
        53.02204074375785,
        -3.2039630001245736
      ],
      "climb_category": 2,
      "city": "Le Bourg D'Oisans",
      "state": "RA",
      "country": "France",
      "private": false,
      "hazardous": false,
      "starred": false
    },
    "kom_rank": null,
    "pr_rank": null,
    "achievements": []
  }
]

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

    Integer segmentId = 56; // Integer | The identifier of the segment.
    Date startDateLocal = 2013-10-20T19:20:30+01:00; // Date | ISO 8601 formatted date time.
    Date endDateLocal = 2013-10-20T19:20:30+01:00; // Date | ISO 8601 formatted date time.
    Integer perPage = 56; // Integer | Number of items per page. Defaults to 30.

    Observable<List<DetailedSegmentEffort>> result = apiInstance.getEffortsBySegmentId(segmentId, startDateLocal, endDateLocal, perPage);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
[
  {
    "id": 123456789,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity": {
      "id": 1234567890,
      "resource_state": 1
    },
    "athlete": {
      "id": 123445678689,
      "resource_state": 1
    },
    "elapsed_time": 1657,
    "moving_time": 1642,
    "start_date": "2007-09-15T08:15:29Z",
    "start_date_local": "2007-09-15T09:15:29Z",
    "distance": 6148.92,
    "start_index": 1102,
    "end_index": 1366,
    "device_watts": false,
    "average_watts": 220.2,
    "segment": {
      "id": 788127,
      "resource_state": 2,
      "name": "Alpe d'Huez",
      "activity_type": "Ride",
      "distance": 6297.46,
      "average_grade": 4.8,
      "maximum_grade": 16.3,
      "elevation_high": 416,
      "elevation_low": 104.6,
      "start_latlng": [
        52.98501000581467,
        -3.1869720001197366
      ],
      "end_latlng": [
        53.02204074375785,
        -3.2039630001245736
      ],
      "climb_category": 2,
      "city": "Le Bourg D'Oisans",
      "state": "RA",
      "country": "France",
      "private": false,
      "hazardous": false,
      "starred": false
    },
    "kom_rank": null,
    "pr_rank": null,
    "achievements": []
  }
]

```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Integer *segmentId = 56; // The identifier of the segment.
Date *startDateLocal = 2013-10-20T19:20:30+01:00; // ISO 8601 formatted date time. (optional)
Date *endDateLocal = 2013-10-20T19:20:30+01:00; // ISO 8601 formatted date time. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVSegmentEffortsApi *apiInstance = [[STRVSegmentEffortsApi alloc] init];

// List Segment Efforts
[apiInstance getEffortsBySegmentIdWith:segmentId
    startDateLocal:startDateLocal
    endDateLocal:endDateLocal
    perPage:perPage
              completionHandler: ^(NSArray<STRVDetailedSegmentEffort>* output, NSError* error) {
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
    "id": 123456789,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity": {
      "id": 1234567890,
      "resource_state": 1
    },
    "athlete": {
      "id": 123445678689,
      "resource_state": 1
    },
    "elapsed_time": 1657,
    "moving_time": 1642,
    "start_date": "2007-09-15T08:15:29Z",
    "start_date_local": "2007-09-15T09:15:29Z",
    "distance": 6148.92,
    "start_index": 1102,
    "end_index": 1366,
    "device_watts": false,
    "average_watts": 220.2,
    "segment": {
      "id": 788127,
      "resource_state": 2,
      "name": "Alpe d'Huez",
      "activity_type": "Ride",
      "distance": 6297.46,
      "average_grade": 4.8,
      "maximum_grade": 16.3,
      "elevation_high": 416,
      "elevation_low": 104.6,
      "start_latlng": [
        52.98501000581467,
        -3.1869720001197366
      ],
      "end_latlng": [
        53.02204074375785,
        -3.2039630001245736
      ],
      "climb_category": 2,
      "city": "Le Bourg D'Oisans",
      "state": "RA",
      "country": "France",
      "private": false,
      "hazardous": false,
      "starred": false
    },
    "kom_rank": null,
    "pr_rank": null,
    "achievements": []
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

var api = new StravaApiV3.SegmentEffortsApi()

var segmentId = 56; // {Integer} The identifier of the segment.

var opts = {
    'startDateLocal': 2013-10-20T19:20:30+01:00, // {Date} ISO 8601 formatted date time.
    'endDateLocal': 2013-10-20T19:20:30+01:00, // {Date} ISO 8601 formatted date time.
    'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
};

var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getEffortsBySegmentId(segmentId, opts, callback);```
```

```json
[
  {
    "id": 123456789,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity": {
      "id": 1234567890,
      "resource_state": 1
    },
    "athlete": {
      "id": 123445678689,
      "resource_state": 1
    },
    "elapsed_time": 1657,
    "moving_time": 1642,
    "start_date": "2007-09-15T08:15:29Z",
    "start_date_local": "2007-09-15T09:15:29Z",
    "distance": 6148.92,
    "start_index": 1102,
    "end_index": 1366,
    "device_watts": false,
    "average_watts": 220.2,
    "segment": {
      "id": 788127,
      "resource_state": 2,
      "name": "Alpe d'Huez",
      "activity_type": "Ride",
      "distance": 6297.46,
      "average_grade": 4.8,
      "maximum_grade": 16.3,
      "elevation_high": 416,
      "elevation_low": 104.6,
      "start_latlng": [
        52.98501000581467,
        -3.1869720001197366
      ],
      "end_latlng": [
        53.02204074375785,
        -3.2039630001245736
      ],
      "climb_category": 2,
      "city": "Le Bourg D'Oisans",
      "state": "RA",
      "country": "France",
      "private": false,
      "hazardous": false,
      "starred": false
    },
    "kom_rank": null,
    "pr_rank": null,
    "achievements": []
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
    public class getEffortsBySegmentIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SegmentEffortsApi();
            var segmentId = 56;  // Integer | The identifier of the segment.
            var startDateLocal = 2013-10-20T19:20:30+01:00;  // Date | ISO 8601 formatted date time. (optional) 
            var endDateLocal = 2013-10-20T19:20:30+01:00;  // Date | ISO 8601 formatted date time. (optional) 
            var perPage = 56;  // Integer | Number of items per page. Defaults to 30. (optional)  (default to 30)

            try
            {
                // List Segment Efforts
                array[DetailedSegmentEffort] result = apiInstance.getEffortsBySegmentId(segmentId, startDateLocal, endDateLocal, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SegmentEffortsApi.getEffortsBySegmentId: " + e.Message );
            }
        }
    }
}

```

```json
[
  {
    "id": 123456789,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity": {
      "id": 1234567890,
      "resource_state": 1
    },
    "athlete": {
      "id": 123445678689,
      "resource_state": 1
    },
    "elapsed_time": 1657,
    "moving_time": 1642,
    "start_date": "2007-09-15T08:15:29Z",
    "start_date_local": "2007-09-15T09:15:29Z",
    "distance": 6148.92,
    "start_index": 1102,
    "end_index": 1366,
    "device_watts": false,
    "average_watts": 220.2,
    "segment": {
      "id": 788127,
      "resource_state": 2,
      "name": "Alpe d'Huez",
      "activity_type": "Ride",
      "distance": 6297.46,
      "average_grade": 4.8,
      "maximum_grade": 16.3,
      "elevation_high": 416,
      "elevation_low": 104.6,
      "start_latlng": [
        52.98501000581467,
        -3.1869720001197366
      ],
      "end_latlng": [
        53.02204074375785,
        -3.2039630001245736
      ],
      "climb_category": 2,
      "city": "Le Bourg D'Oisans",
      "state": "RA",
      "country": "France",
      "private": false,
      "hazardous": false,
      "starred": false
    },
    "kom_rank": null,
    "pr_rank": null,
    "achievements": []
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
api_instance = swagger_client.SegmentEffortsApi()
segmentId = 56 # Integer | The identifier of the segment.
startDateLocal = 2013-10-20T19:20:30+01:00 # Date | ISO 8601 formatted date time. (optional)
endDateLocal = 2013-10-20T19:20:30+01:00 # Date | ISO 8601 formatted date time. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Segment Efforts
    api_response = api_instance.getEffortsBySegmentId(segmentId, startDateLocal=startDateLocal, endDateLocal=endDateLocal, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SegmentEffortsApi->getEffortsBySegmentId: %s\n" % e)

```

```json
[
  {
    "id": 123456789,
    "resource_state": 2,
    "name": "Alpe d'Huez",
    "activity": {
      "id": 1234567890,
      "resource_state": 1
    },
    "athlete": {
      "id": 123445678689,
      "resource_state": 1
    },
    "elapsed_time": 1657,
    "moving_time": 1642,
    "start_date": "2007-09-15T08:15:29Z",
    "start_date_local": "2007-09-15T09:15:29Z",
    "distance": 6148.92,
    "start_index": 1102,
    "end_index": 1366,
    "device_watts": false,
    "average_watts": 220.2,
    "segment": {
      "id": 788127,
      "resource_state": 2,
      "name": "Alpe d'Huez",
      "activity_type": "Ride",
      "distance": 6297.46,
      "average_grade": 4.8,
      "maximum_grade": 16.3,
      "elevation_high": 416,
      "elevation_low": 104.6,
      "start_latlng": [
        52.98501000581467,
        -3.1869720001197366
      ],
      "end_latlng": [
        53.02204074375785,
        -3.2039630001245736
      ],
      "climb_category": 2,
      "city": "Le Bourg D'Oisans",
      "state": "RA",
      "country": "France",
      "private": false,
      "hazardous": false,
      "starred": false
    },
    "kom_rank": null,
    "pr_rank": null,
    "achievements": []
  }
]

```

:::

::::

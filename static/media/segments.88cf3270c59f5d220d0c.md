::::docs-panel{id=left target=#api-Segments-getSegmentById}

### 세그먼트 가져오기 (getSegmentById)

지정된 세그먼트를 반환합니다. read_all scope는 선수별 세그먼트 정보를 검색하거나 다음 세그먼트에 대해
사적 부분을 검색하다

:docs-http-method{method=get url=/segments/&lbrace;id&rbrace;}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="세그먼트의 식별자입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="세그먼트를 나타냅니다. <a href='/docs/reference/#api-models-DetailedSegment'>DetailedSegment</a>의 인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/activities/{id}/comments?page=&per_page=" "Authorization: Bearer [[token]]"
```

```json
{
  "id": 229781,
  "resource_state": 3,
  "name": "Hawk Hill",
  "activity_type": "Ride",
  "distance": 2684.82,
  "average_grade": 5.7,
  "maximum_grade": 14.2,
  "elevation_high": 245.3,
  "elevation_low": 92.4,
  "start_latlng": [
    37.8331119,
    -122.4834356
  ],
  "end_latlng": [
    37.8280722,
    -122.4981393
  ],
  "climb_category": 1,
  "city": "San Francisco",
  "state": "CA",
  "country": "United States",
  "private": false,
  "hazardous": false,
  "starred": false,
  "created_at": "2009-09-21T20:29:41Z",
  "updated_at": "2018-02-15T09:04:18Z",
  "total_elevation_gain": 155.733,
  "map": {
    "id": "s229781",
    "polyline": "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "resource_state": 3
  },
  "effort_count": 309974,
  "athlete_count": 30623,
  "star_count": 2428,
  "athlete_segment_stats": {
    "pr_elapsed_time": 553,
    "pr_date": "1993-04-03",
    "effort_count": 2
  }
}
```

:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.SegmentsApi;

import rx.Observable;

public class SegmentsApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    SegmentsApi api = client.createService(SegmentsApi.class);

    Long id = 789; // Long | The identifier of the segment.

    Observable<DetailedSegment> result = apiInstance.getSegmentById(id);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```

```json
{
  "id": 229781,
  "resource_state": 3,
  "name": "Hawk Hill",
  "activity_type": "Ride",
  "distance": 2684.82,
  "average_grade": 5.7,
  "maximum_grade": 14.2,
  "elevation_high": 245.3,
  "elevation_low": 92.4,
  "start_latlng": [
    37.8331119,
    -122.4834356
  ],
  "end_latlng": [
    37.8280722,
    -122.4981393
  ],
  "climb_category": 1,
  "city": "San Francisco",
  "state": "CA",
  "country": "United States",
  "private": false,
  "hazardous": false,
  "starred": false,
  "created_at": "2009-09-21T20:29:41Z",
  "updated_at": "2018-02-15T09:04:18Z",
  "total_elevation_gain": 155.733,
  "map": {
    "id": "s229781",
    "polyline": "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "resource_state": 3
  },
  "effort_count": 309974,
  "athlete_count": 30623,
  "star_count": 2428,
  "athlete_segment_stats": {
    "pr_elapsed_time": 553,
    "pr_date": "1993-04-03",
    "effort_count": 2
  }
}
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the segment.

STRVSegmentsApi *apiInstance = [[STRVSegmentsApi alloc] init];

// Get Segment
[apiInstance getSegmentByIdWith:id
              completionHandler: ^(STRVDetailedSegment output, NSError* error) {
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
  "id": 229781,
  "resource_state": 3,
  "name": "Hawk Hill",
  "activity_type": "Ride",
  "distance": 2684.82,
  "average_grade": 5.7,
  "maximum_grade": 14.2,
  "elevation_high": 245.3,
  "elevation_low": 92.4,
  "start_latlng": [
    37.8331119,
    -122.4834356
  ],
  "end_latlng": [
    37.8280722,
    -122.4981393
  ],
  "climb_category": 1,
  "city": "San Francisco",
  "state": "CA",
  "country": "United States",
  "private": false,
  "hazardous": false,
  "starred": false,
  "created_at": "2009-09-21T20:29:41Z",
  "updated_at": "2018-02-15T09:04:18Z",
  "total_elevation_gain": 155.733,
  "map": {
    "id": "s229781",
    "polyline": "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "resource_state": 3
  },
  "effort_count": 309974,
  "athlete_count": 30623,
  "star_count": 2428,
  "athlete_segment_stats": {
    "pr_elapsed_time": 553,
    "pr_date": "1993-04-03",
    "effort_count": 2
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

var api = new StravaApiV3.SegmentsApi()

var id = 789; // {Long} The identifier of the segment.


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getSegmentById(id, callback);

```

```json
{
  "id": 229781,
  "resource_state": 3,
  "name": "Hawk Hill",
  "activity_type": "Ride",
  "distance": 2684.82,
  "average_grade": 5.7,
  "maximum_grade": 14.2,
  "elevation_high": 245.3,
  "elevation_low": 92.4,
  "start_latlng": [
    37.8331119,
    -122.4834356
  ],
  "end_latlng": [
    37.8280722,
    -122.4981393
  ],
  "climb_category": 1,
  "city": "San Francisco",
  "state": "CA",
  "country": "United States",
  "private": false,
  "hazardous": false,
  "starred": false,
  "created_at": "2009-09-21T20:29:41Z",
  "updated_at": "2018-02-15T09:04:18Z",
  "total_elevation_gain": 155.733,
  "map": {
    "id": "s229781",
    "polyline": "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "resource_state": 3
  },
  "effort_count": 309974,
  "athlete_count": 30623,
  "star_count": 2428,
  "athlete_segment_stats": {
    "pr_elapsed_time": 553,
    "pr_date": "1993-04-03",
    "effort_count": 2
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
    public class getSegmentByIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SegmentsApi();
            var id = 789;  // Long | The identifier of the segment.

            try
            {
                // Get Segment
                DetailedSegment result = apiInstance.getSegmentById(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SegmentsApi.getSegmentById: " + e.Message );
            }
        }
    }
}

```

```json
{
  "id": 229781,
  "resource_state": 3,
  "name": "Hawk Hill",
  "activity_type": "Ride",
  "distance": 2684.82,
  "average_grade": 5.7,
  "maximum_grade": 14.2,
  "elevation_high": 245.3,
  "elevation_low": 92.4,
  "start_latlng": [
    37.8331119,
    -122.4834356
  ],
  "end_latlng": [
    37.8280722,
    -122.4981393
  ],
  "climb_category": 1,
  "city": "San Francisco",
  "state": "CA",
  "country": "United States",
  "private": false,
  "hazardous": false,
  "starred": false,
  "created_at": "2009-09-21T20:29:41Z",
  "updated_at": "2018-02-15T09:04:18Z",
  "total_elevation_gain": 155.733,
  "map": {
    "id": "s229781",
    "polyline": "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "resource_state": 3
  },
  "effort_count": 309974,
  "athlete_count": 30623,
  "star_count": 2428,
  "athlete_segment_stats": {
    "pr_elapsed_time": 553,
    "pr_date": "1993-04-03",
    "effort_count": 2
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
api_instance = swagger_client.SegmentsApi()
id = 789 # Long | The identifier of the segment.

try: 
    # Get Segment
    api_response = api_instance.getSegmentById(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SegmentsApi->getSegmentById: %s\n" % e)

```

```json
{
  "id": 229781,
  "resource_state": 3,
  "name": "Hawk Hill",
  "activity_type": "Ride",
  "distance": 2684.82,
  "average_grade": 5.7,
  "maximum_grade": 14.2,
  "elevation_high": 245.3,
  "elevation_low": 92.4,
  "start_latlng": [
    37.8331119,
    -122.4834356
  ],
  "end_latlng": [
    37.8280722,
    -122.4981393
  ],
  "climb_category": 1,
  "city": "San Francisco",
  "state": "CA",
  "country": "United States",
  "private": false,
  "hazardous": false,
  "starred": false,
  "created_at": "2009-09-21T20:29:41Z",
  "updated_at": "2018-02-15T09:04:18Z",
  "total_elevation_gain": 155.733,
  "map": {
    "id": "s229781",
    "polyline": "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "resource_state": 3
  },
  "effort_count": 309974,
  "athlete_count": 30623,
  "star_count": 2428,
  "athlete_segment_stats": {
    "pr_elapsed_time": 553,
    "pr_date": "1993-04-03",
    "effort_count": 2
  }
}
```

:::

::::
::::docs-panel{id=left target=#api-Segments-getLoggedInAthleteStarredSegments}

### 별 표시된 세그먼트 나열 (getLoggedInAthleteStarredSegments)

인증된 선수의 스타 부문 목록입니다. 토큰에 의해 요청되지 않는 한 개인 세그먼트는 필터링됩니다.
모든 범위를 읽다.
:docs-http-method{method=get url=/segments/starred}

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
description="<a href='/docs/reference/#api-models-SummarySegment'>SummarySegment</a>객체의 배열입니다."
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
$ http GET "https://www.strava.com/api/v3/segments/starred?page=&per_page=" "Authorization: Bearer [[token]]"
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

    Integer page = 56; // Integer | Page number. Defaults to 1.
    Integer perPage = 56; // Integer | Number of items per page. Defaults to 30.

    Observable<List<SummarySegment>> result = apiInstance.getLoggedInAthleteStarredSegments(page, perPage);
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

Integer *page = 56; // Page number. Defaults to 1. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVSegmentsApi *apiInstance = [[STRVSegmentsApi alloc] init];

// List Starred Segments
[apiInstance getLoggedInAthleteStarredSegmentsWith:page
    perPage:perPage
              completionHandler: ^(NSArray<STRVSummarySegment>* output, NSError* error) {
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
api.getLoggedInAthleteStarredSegments(opts, callback);

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
    public class getLoggedInAthleteStarredSegmentsExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SegmentsApi();
            var page = 56;  // Integer | Page number. Defaults to 1. (optional) 
            var perPage = 56;  // Integer | Number of items per page. Defaults to 30. (optional)  (default to 30)

            try
            {
                // List Starred Segments
                array[SummarySegment] result = apiInstance.getLoggedInAthleteStarredSegments(page, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SegmentsApi.getLoggedInAthleteStarredSegments: " + e.Message );
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
page = 56 # Integer | Page number. Defaults to 1. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Starred Segments
    api_response = api_instance.getLoggedInAthleteStarredSegments(page=page, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SegmentsApi->getLoggedInAthleteStarredSegments: %s\n" % e)

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

::::docs-panel{id=left target=#api-Segments-exploreSegments}

### 세그먼트 탐색 (exploreSegments)

지정된 쿼리와 일치하는 상위 10개의 세그먼트를 반환합니다.
:docs-http-method{method=get url=/segments/explore}

#### Parameters

:::docs-table
:docs-table-row{
name="bounds"
requiredText="required array[Float], in query"
description="검색을 위한 직사각형 경계를 설명하는 두 점의 위도 및 경도: [남서쪽 모서리 위도, 남서쪽 모서리 경도, 북동쪽 모서리 경도, 북동쪽 모서리 경도]"
}
:docs-table-row{
name="activity_type"
requiredText="String, in query"
description="원하는 활동 유형입니다. 다음 값 중 하나를 취할 수 있습니다: <code>running</code>, <code>riding</code>"
}
:docs-table-row{
name="min_cat"
requiredText="Integer, in query"
description="최소 등반 범주입니다."
}
:docs-table-row{
name="max_cat"
requiredText="Integer, in query"
description="최대 등반 범주입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="일치하는 세그먼트 목록입니다. <a href='/docs/reference/#api-models-ExplorerResponse'>ExplorerResponse</a>의 인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/segments/explore?bounds=&activity_type=&min_cat=&max_cat=" "Authorization: Bearer [[token]]"

```
```json
{
  "segments" : [ {
    "id" : 229781,
    "resource_state" : 2,
    "name" : "Hawk Hill",
    "climb_category" : 1,
    "climb_category_desc" : "4",
    "avg_grade" : 5.7,
    "start_latlng" : [ 37.8331119, -122.4834356 ],
    "end_latlng" : [ 37.8280722, -122.4981393 ],
    "elev_difference" : 152.8,
    "distance" : 2684.8,
    "points" : "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "starred" : false
  } ]
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

    array[Float] bounds = ; // array[Float] | The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]
    String activityType = activityType_example; // String | Desired activity type.
    Integer minCat = 56; // Integer | The minimum climbing category.
    Integer maxCat = 56; // Integer | The maximum climbing category.

    Observable<ExplorerResponse> result = apiInstance.exploreSegments(bounds, activityType, minCat, maxCat);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```
```json
{
  "segments" : [ {
    "id" : 229781,
    "resource_state" : 2,
    "name" : "Hawk Hill",
    "climb_category" : 1,
    "climb_category_desc" : "4",
    "avg_grade" : 5.7,
    "start_latlng" : [ 37.8331119, -122.4834356 ],
    "end_latlng" : [ 37.8280722, -122.4981393 ],
    "elev_difference" : 152.8,
    "distance" : 2684.8,
    "points" : "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "starred" : false
  } ]
}

```
:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

array[Float] *bounds = ; // The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]
String *activityType = activityType_example; // Desired activity type. (optional)
Integer *minCat = 56; // The minimum climbing category. (optional)
Integer *maxCat = 56; // The maximum climbing category. (optional)

STRVSegmentsApi *apiInstance = [[STRVSegmentsApi alloc] init];

// Explore segments
[apiInstance exploreSegmentsWith:bounds
    activityType:activityType
    minCat:minCat
    maxCat:maxCat
              completionHandler: ^(STRVExplorerResponse output, NSError* error) {
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
  "segments" : [ {
    "id" : 229781,
    "resource_state" : 2,
    "name" : "Hawk Hill",
    "climb_category" : 1,
    "climb_category_desc" : "4",
    "avg_grade" : 5.7,
    "start_latlng" : [ 37.8331119, -122.4834356 ],
    "end_latlng" : [ 37.8280722, -122.4981393 ],
    "elev_difference" : 152.8,
    "distance" : 2684.8,
    "points" : "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "starred" : false
  } ]
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

var bounds = ; // {array[Float]} The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]

var opts = { 
  'activityType': activityType_example, // {String} Desired activity type.
  'minCat': 56, // {Integer} The minimum climbing category.
  'maxCat': 56 // {Integer} The maximum climbing category.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.exploreSegments(bounds, opts, callback);

```
```json
{
  "segments" : [ {
    "id" : 229781,
    "resource_state" : 2,
    "name" : "Hawk Hill",
    "climb_category" : 1,
    "climb_category_desc" : "4",
    "avg_grade" : 5.7,
    "start_latlng" : [ 37.8331119, -122.4834356 ],
    "end_latlng" : [ 37.8280722, -122.4981393 ],
    "elev_difference" : 152.8,
    "distance" : 2684.8,
    "points" : "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "starred" : false
  } ]
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
    public class exploreSegmentsExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new SegmentsApi();
            var bounds = new array[Float](); // array[Float] | The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]
            var activityType = activityType_example;  // String | Desired activity type. (optional) 
            var minCat = 56;  // Integer | The minimum climbing category. (optional) 
            var maxCat = 56;  // Integer | The maximum climbing category. (optional) 

            try
            {
                // Explore segments
                ExplorerResponse result = apiInstance.exploreSegments(bounds, activityType, minCat, maxCat);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SegmentsApi.exploreSegments: " + e.Message );
            }
        }
    }
}

```
```json
{
  "segments" : [ {
    "id" : 229781,
    "resource_state" : 2,
    "name" : "Hawk Hill",
    "climb_category" : 1,
    "climb_category_desc" : "4",
    "avg_grade" : 5.7,
    "start_latlng" : [ 37.8331119, -122.4834356 ],
    "end_latlng" : [ 37.8280722, -122.4981393 ],
    "elev_difference" : 152.8,
    "distance" : 2684.8,
    "points" : "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "starred" : false
  } ]
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
bounds =  # array[Float] | The latitude and longitude for two points describing a rectangular boundary for the search: [southwest corner latitutde, southwest corner longitude, northeast corner latitude, northeast corner longitude]
activityType = activityType_example # String | Desired activity type. (optional)
minCat = 56 # Integer | The minimum climbing category. (optional)
maxCat = 56 # Integer | The maximum climbing category. (optional)

try: 
    # Explore segments
    api_response = api_instance.exploreSegments(bounds, activityType=activityType, minCat=minCat, maxCat=maxCat)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SegmentsApi->exploreSegments: %s\n" % e)

```
```json
{
  "segments" : [ {
    "id" : 229781,
    "resource_state" : 2,
    "name" : "Hawk Hill",
    "climb_category" : 1,
    "climb_category_desc" : "4",
    "avg_grade" : 5.7,
    "start_latlng" : [ 37.8331119, -122.4834356 ],
    "end_latlng" : [ 37.8280722, -122.4981393 ],
    "elev_difference" : 152.8,
    "distance" : 2684.8,
    "points" : "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    "starred" : false
  } ]
}

```
:::

::::

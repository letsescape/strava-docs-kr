::::docs-panel{id=left target=#api-Streams-getSegmentStreams}

### 세그먼트 스트림 가져오기 (getSegmentStreams)
지정된 세그먼트의 스트림을 반환합니다. 전용 세그먼트에 read_all 범위가 필요합니다.

:docs-http-method{method=get url=/segments/&lbrace;id&rbrace;/streams}


#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="세그먼트의 식별자입니다."
}
:docs-table-row{
name="keys"
requiredText="required array[String], in query"
description="반환할 스트림 유형입니다. 다음 값 중 하나를 사용할 수 있습니다."
}
:docs-table-row{
name="key_by_type"
requiredText="required Boolean, in query"
description="사실일 것이다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="요청한 스트림 집합입니다. <a href='/docs/reference/#api-models-StreamSet'>StreamSet</a>의 인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/segments/{id}/streams?keys=&key_by_type=" "Authorization: Bearer [[token]]"
```
```json
[ {
  "type" : "latlng",
  "data" : [ [ 37.833112, -122.483436 ], [ 37.832964, -122.483406 ] ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "distance",
  "data" : [ 0, 16.8 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "altitude",
  "data" : [ 92.4, 93.4 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
} ]
```
:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.StreamsApi;

import rx.Observable;

public class StreamsApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    StreamsApi api = client.createService(StreamsApi.class);

    Long id = 789; // Long | The identifier of the segment.
    array[String] keys = ; // array[String] | The types of streams to return.
    Boolean keyByType = true; // Boolean | Must be true.

    Observable<StreamSet> result = apiInstance.getSegmentStreams(id, keys, keyByType);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```
```json
[ {
  "type" : "latlng",
  "data" : [ [ 37.833112, -122.483436 ], [ 37.832964, -122.483406 ] ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "distance",
  "data" : [ 0, 16.8 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "altitude",
  "data" : [ 92.4, 93.4 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
} ]
```
:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the segment.
array[String] *keys = ; // The types of streams to return.
Boolean *keyByType = true; // Must be true. (default to true)

STRVStreamsApi *apiInstance = [[STRVStreamsApi alloc] init];

// Get Segment Streams
[apiInstance getSegmentStreamsWith:id
    keys:keys
    keyByType:keyByType
              completionHandler: ^(STRVStreamSet output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];

```
```json
[ {
  "type" : "latlng",
  "data" : [ [ 37.833112, -122.483436 ], [ 37.832964, -122.483406 ] ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "distance",
  "data" : [ 0, 16.8 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "altitude",
  "data" : [ 92.4, 93.4 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
} ]
```
:::

:::docs-tab{language=javaScript}

```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.StreamsApi()

var id = 789; // {Long} The identifier of the segment.

var keys = ; // {array[String]} The types of streams to return.

var keyByType = true; // {Boolean} Must be true.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSegmentStreams(id, keys, keyByType, callback);

```
```json
[ {
  "type" : "latlng",
  "data" : [ [ 37.833112, -122.483436 ], [ 37.832964, -122.483406 ] ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "distance",
  "data" : [ 0, 16.8 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "altitude",
  "data" : [ 92.4, 93.4 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
} ]
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
    public class getSegmentStreamsExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new StreamsApi();
            var id = 789;  // Long | The identifier of the segment.
            var keys = new array[String](); // array[String] | The types of streams to return.
            var keyByType = true;  // Boolean | Must be true. (default to true)

            try
            {
                // Get Segment Streams
                StreamSet result = apiInstance.getSegmentStreams(id, keys, keyByType);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling StreamsApi.getSegmentStreams: " + e.Message );
            }
        }
    }
}

```
```json
[ {
  "type" : "latlng",
  "data" : [ [ 37.833112, -122.483436 ], [ 37.832964, -122.483406 ] ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "distance",
  "data" : [ 0, 16.8 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "altitude",
  "data" : [ 92.4, 93.4 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
} ]
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
api_instance = swagger_client.StreamsApi()
id = 789 # Long | The identifier of the segment.
keys =  # array[String] | The types of streams to return.
keyByType = true # Boolean | Must be true. (default to true)

try: 
    # Get Segment Streams
    api_response = api_instance.getSegmentStreams(id, keys, keyByType)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling StreamsApi->getSegmentStreams: %s\n" % e)

```
```json
[ {
  "type" : "latlng",
  "data" : [ [ 37.833112, -122.483436 ], [ 37.832964, -122.483406 ] ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "distance",
  "data" : [ 0, 16.8 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
}, {
  "type" : "altitude",
  "data" : [ 92.4, 93.4 ],
  "series_type" : "distance",
  "original_size" : 2,
  "resolution" : "high"
} ]
```
:::

::::

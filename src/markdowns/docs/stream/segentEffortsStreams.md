::::docs-panel{id=left target=#api-Streams-getSegmentEffortStreams}

### 세그먼트 노력 스트림 가져오기 (getSegmentEffortStreams)

인증된 선수가 완료한 세그먼트 노력에 대한 스트림 집합을 반환합니다. read_all 범위가 필요합니다.
:docs-http-method{method=get url=/segment_efforts/&lbrace;id&rbrace;/streams}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="세그먼트 노력의 식별자입니다."
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
$ http GET "https://www.strava.com/api/v3/segment_efforts/{id}/streams?keys=&key_by_type=" "Authorization: Bearer [[token]]"

```
```json
[ {
  "type" : "distance",
  "data" : [ 904.5, 957.8, 963.1, 989.1, 1011.9, 1049.7, 1082.4, 1098.1, 1113.2, 1124.7, 1139.2, 1142.1, 1170.4, 1173 ],
  "series_type" : "distance",
  "original_size" : 14,
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

    Long id = 789; // Long | The identifier of the segment effort.
    array[String] keys = ; // array[String] | The types of streams to return.
    Boolean keyByType = true; // Boolean | Must be true.

    Observable<StreamSet> result = apiInstance.getSegmentEffortStreams(id, keys, keyByType);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```
```json
[ {
  "type" : "distance",
  "data" : [ 904.5, 957.8, 963.1, 989.1, 1011.9, 1049.7, 1082.4, 1098.1, 1113.2, 1124.7, 1139.2, 1142.1, 1170.4, 1173 ],
  "series_type" : "distance",
  "original_size" : 14,
  "resolution" : "high"
} ]
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the segment effort.
array[String] *keys = ; // The types of streams to return.
Boolean *keyByType = true; // Must be true. (default to true)

STRVStreamsApi *apiInstance = [[STRVStreamsApi alloc] init];

// Get Segment Effort Streams
[apiInstance getSegmentEffortStreamsWith:id
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
  "type" : "distance",
  "data" : [ 904.5, 957.8, 963.1, 989.1, 1011.9, 1049.7, 1082.4, 1098.1, 1113.2, 1124.7, 1139.2, 1142.1, 1170.4, 1173 ],
  "series_type" : "distance",
  "original_size" : 14,
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

var id = 789; // {Long} The identifier of the segment effort.

var keys = ; // {array[String]} The types of streams to return.

var keyByType = true; // {Boolean} Must be true.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSegmentEffortStreams(id, keys, keyByType, callback);

```
```json
[ {
  "type" : "distance",
  "data" : [ 904.5, 957.8, 963.1, 989.1, 1011.9, 1049.7, 1082.4, 1098.1, 1113.2, 1124.7, 1139.2, 1142.1, 1170.4, 1173 ],
  "series_type" : "distance",
  "original_size" : 14,
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
    public class getSegmentEffortStreamsExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new StreamsApi();
            var id = 789;  // Long | The identifier of the segment effort.
            var keys = new array[String](); // array[String] | The types of streams to return.
            var keyByType = true;  // Boolean | Must be true. (default to true)

            try
            {
                // Get Segment Effort Streams
                StreamSet result = apiInstance.getSegmentEffortStreams(id, keys, keyByType);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling StreamsApi.getSegmentEffortStreams: " + e.Message );
            }
        }
    }
}

```
```json
[ {
  "type" : "distance",
  "data" : [ 904.5, 957.8, 963.1, 989.1, 1011.9, 1049.7, 1082.4, 1098.1, 1113.2, 1124.7, 1139.2, 1142.1, 1170.4, 1173 ],
  "series_type" : "distance",
  "original_size" : 14,
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
id = 789 # Long | The identifier of the segment effort.
keys =  # array[String] | The types of streams to return.
keyByType = true # Boolean | Must be true. (default to true)

try: 
    # Get Segment Effort Streams
    api_response = api_instance.getSegmentEffortStreams(id, keys, keyByType)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling StreamsApi->getSegmentEffortStreams: %s\n" % e)

```
```json
[ {
  "type" : "distance",
  "data" : [ 904.5, 957.8, 963.1, 989.1, 1011.9, 1049.7, 1082.4, 1098.1, 1113.2, 1124.7, 1139.2, 1142.1, 1170.4, 1173 ],
  "series_type" : "distance",
  "original_size" : 14,
  "resolution" : "high"
} ]
```

:::

::::

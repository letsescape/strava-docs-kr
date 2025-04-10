::::docs-panel{id=left target=#api-Uploads-getUploadById}

### 업로드 가져오기 (getUploadById)

지정된 식별자에 대한 업로드를 반환합니다. 활동: 쓰기 범위 필요.

:docs-http-method{method=get url=/uploads/&lbrace;uploadId&rbrace;}

#### Parameters

:::docs-table
:docs-table-row{
name="uploadId"
requiredText="required Long, in path"
description="업로드의 식별자입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="업로드의 표현입니다. <a href='/docs/reference/#api-models-Upload'>Upload</a>의 인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/uploads/{uploadId}" "Authorization: Bearer [[token]]"

```

```json
{
  "id_str": "aeiou",
  "activity_id": 6,
  "external_id": "aeiou",
  "id": 0,
  "error": "aeiou",
  "status": "aeiou"
}
```

:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.UploadsApi;

import rx.Observable;

public class UploadsApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    UploadsApi api = client.createService(UploadsApi.class);

    Long uploadId = 789; // Long | The identifier of the upload.

    Observable<Upload> result = apiInstance.getUploadById(uploadId);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```

```json
{
  "id_str": "aeiou",
  "activity_id": 6,
  "external_id": "aeiou",
  "id": 0,
  "error": "aeiou",
  "status": "aeiou"
}
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *uploadId = 789; // The identifier of the upload.

STRVUploadsApi *apiInstance = [[STRVUploadsApi alloc] init];

// Get Upload
[apiInstance getUploadByIdWith:uploadId
              completionHandler: ^(STRVUpload output, NSError* error) {
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
  "id_str": "aeiou",
  "activity_id": 6,
  "external_id": "aeiou",
  "id": 0,
  "error": "aeiou",
  "status": "aeiou"
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

var api = new StravaApiV3.UploadsApi()

var uploadId = 789; // {Long} The identifier of the upload.


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getUploadById(uploadId, callback);

```

```json
{
  "id_str": "aeiou",
  "activity_id": 6,
  "external_id": "aeiou",
  "id": 0,
  "error": "aeiou",
  "status": "aeiou"
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
    public class getUploadByIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UploadsApi();
            var uploadId = 789;  // Long | The identifier of the upload.

            try
            {
                // Get Upload
                Upload result = apiInstance.getUploadById(uploadId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling UploadsApi.getUploadById: " + e.Message );
            }
        }
    }
}

```

```json
{
  "id_str": "aeiou",
  "activity_id": 6,
  "external_id": "aeiou",
  "id": 0,
  "error": "aeiou",
  "status": "aeiou"
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
api_instance = swagger_client.UploadsApi()
uploadId = 789 # Long | The identifier of the upload.

try: 
    # Get Upload
    api_response = api_instance.getUploadById(uploadId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UploadsApi->getUploadById: %s\n" % e)

```

```json
{
  "id_str": "aeiou",
  "activity_id": 6,
  "external_id": "aeiou",
  "id": 0,
  "error": "aeiou",
  "status": "aeiou"
}
```

:::

::::

::::docs-panel{id=left target=#api-Uploads-createUpload}

### 업로드 활동 (createUpload)

활동을 만들 새 데이터 파일을 업로드합니다. 활동: 쓰기 범위 필요.
:docs-http-method{method=post url=/uploads}

#### Parameters

:::docs-table
:docs-table-row{
name="file"
requiredText="File, in form"
description="업로드된 파일입니다."
}
:docs-table-row{
name="name"
requiredText="String, in form"
description="결과 활동의 원하는 이름입니다."
}
:docs-table-row{
name="description"
requiredText="String, in form"
description="결과 활동에 대한 원하는 설명입니다."
}
:docs-table-row{
name="trainer"
requiredText="String, in form"
description="결과 활동이 강사에게 수행된 것으로 표시되어야 하는지 여부"
}
:docs-table-row{
name="commute"
requiredText="String, in form"
description="결과 활동이 통근으로 태그되어야 하는지 여부."
}
:docs-table-row{
name="data_type"
requiredText="String, in form"
description="업로드된 파일의 형식입니다. 다음 값 중 하나를 사용할 수 있습니다: <code>fit</code>, <code>fit.gz</code>, <code>tcx</code>, <code>
tcx.gz</code>, <code>gpx</code>, <code>gpx.gz</code>"
}
:docs-table-row{
name="external_id"
requiredText="String, in form"
description="결과 활동의 원하는 외부 식별자입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="생성된 업로드를 나타냅니다. <a href='/docs/reference/#api-models-Upload'>Upload</a>인스턴스입니다."
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
$ http POST "https://www.strava.com/api/v3/uploads" file@/path/to/file name='value' description='value' trainer='value' commute='value' data_type='value' external_id='value' "Authorization: Bearer [[token]]"

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

    File file = /path/to/file.txt; // File | The uploaded file.
    String name = name_example; // String | The desired name of the resulting activity.
    String description = description_example; // String | The desired description of the resulting activity.
    String trainer = trainer_example; // String | Whether the resulting activity should be marked as having been performed on a trainer.
    String commute = commute_example; // String | Whether the resulting activity should be tagged as a commute.
    String dataType = dataType_example; // String | The format of the uploaded file.
    String externalId = externalId_example; // String | The desired external identifier of the resulting activity.

    Observable<Upload> result = apiInstance.createUpload(file, name, description, trainer, commute, dataType, externalId);
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

File *file = /path/to/file.txt; // The uploaded file. (optional)
String *name = name_example; // The desired name of the resulting activity. (optional)
String *description = description_example; // The desired description of the resulting activity. (optional)
String *trainer = trainer_example; // Whether the resulting activity should be marked as having been performed on a trainer. (optional)
String *commute = commute_example; // Whether the resulting activity should be tagged as a commute. (optional)
String *dataType = dataType_example; // The format of the uploaded file. (optional)
String *externalId = externalId_example; // The desired external identifier of the resulting activity. (optional)

STRVUploadsApi *apiInstance = [[STRVUploadsApi alloc] init];

// Upload Activity
[apiInstance createUploadWith:file
    name:name
    description:description
    trainer:trainer
    commute:commute
    dataType:dataType
    externalId:externalId
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

var opts = {
        'file': /path/to / file.txt, // {File} The uploaded file.
    'name'
:
name_example, // {String} The desired name of the resulting activity.
    'description'
:
description_example, // {String} The desired description of the resulting activity.
    'trainer'
:
trainer_example, // {String} Whether the resulting activity should be marked as having been performed on a trainer.
    'commute'
:
commute_example, // {String} Whether the resulting activity should be tagged as a commute.
    'dataType'
:
dataType_example, // {String} The format of the uploaded file.
    'externalId'
:
externalId_example // {String} The desired external identifier of the resulting activity.
}
;

var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.createUpload(opts, callback);

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
    public class createUploadExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UploadsApi();
            var file = new File(); // File | The uploaded file. (optional) 
            var name = name_example;  // String | The desired name of the resulting activity. (optional) 
            var description = description_example;  // String | The desired description of the resulting activity. (optional) 
            var trainer = trainer_example;  // String | Whether the resulting activity should be marked as having been performed on a trainer. (optional) 
            var commute = commute_example;  // String | Whether the resulting activity should be tagged as a commute. (optional) 
            var dataType = dataType_example;  // String | The format of the uploaded file. (optional) 
            var externalId = externalId_example;  // String | The desired external identifier of the resulting activity. (optional) 

            try
            {
                // Upload Activity
                Upload result = apiInstance.createUpload(file, name, description, trainer, commute, dataType, externalId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling UploadsApi.createUpload: " + e.Message );
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
file = /path/to/file.txt # File | The uploaded file. (optional)
name = name_example # String | The desired name of the resulting activity. (optional)
description = description_example # String | The desired description of the resulting activity. (optional)
trainer = trainer_example # String | Whether the resulting activity should be marked as having been performed on a trainer. (optional)
commute = commute_example # String | Whether the resulting activity should be tagged as a commute. (optional)
dataType = dataType_example # String | The format of the uploaded file. (optional)
externalId = externalId_example # String | The desired external identifier of the resulting activity. (optional)

try: 
    # Upload Activity
    api_response = api_instance.createUpload(file=file, name=name, description=description, trainer=trainer, commute=commute, dataType=dataType, externalId=externalId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UploadsApi->createUpload: %s\n" % e)

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

::::docs-panel{id=left target=#api-Activities-getKudoersByActivityId}

### 활동 Kudoers 나열 (getKudoersByActivityId)

식별자로 식별된 활동을 수행한 선수를 반환합니다. 활동 필요: 모두를 위한 읽기 및
팔로워 활동. 작업 필요: 나만 작업하려면 read_all.

:docs-http-method{method=get url=/activities/&lbrace;id&rbrace;/kudos}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="활동의 식별자입니다."
}

:docs-table-row{
name="page"
requiredText="Integer, in query"
description="페이지 번호. 기본값은 1입니다.."
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
description="<a href='/docs/reference/#api-models-SummaryAthlete'>SummaryAthlete</a> 객체의 배열입니다."
}
:docs-table-row{
name="HTTP code 4xx, 5xx"
description="<a href='/docs/reference/#api-models-Fault'>오류</a>의 원인을 설명하는 오류입니다"
}

:::

::::

::::docs-panel{#right}

:::docs-tab{language=HTTPie}

```shell
$ http GET "https://www.strava.com/api/v3/activities/{id}/kudos?page=&per_page=" "Authorization: Bearer [[token]]"
```

```json
[
  {
    "firstname": "Peter",
    "lastname": "S"
  }
]
```

:::

:::docs-tab{language=Java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.ActivitiesApi;

import rx.Observable;

public class ActivitiesApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    ActivitiesApi api = client.createService(ActivitiesApi.class);

    Long id = 789; // Long | The identifier of the activity.
    Integer page = 56; // Integer | Page number. Defaults to 1.
    Integer perPage = 56; // Integer | Number of items per page. Defaults to 30.

    Observable<List<SummaryAthlete>> result = apiInstance.getKudoersByActivityId(id, page, perPage);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
[
  {
    "firstname": "Peter",
    "lastname": "S"
  }
]
```

:::

:::docs-tab{language=Obj-C}

```c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the activity.
Integer *page = 56; // Page number. Defaults to 1. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVActivitiesApi *apiInstance = [[STRVActivitiesApi alloc] init];

// List Activity Kudoers
[apiInstance getKudoersByActivityIdWith:id
    page:page
    perPage:perPage
              completionHandler: ^(NSArray<STRVSummaryAthlete>* output, NSError* error) {
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
    "firstname": "Peter",
    "lastname": "S"
  }
]
```

:::

:::docs-tab{language=javascript}

```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var id = 789; // {Long} The identifier of the activity.

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
api.getKudoersByActivityId(id, opts, callback);
```

```json
[
  {
    "firstname": "Peter",
    "lastname": "S"
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
    public class getKudoersByActivityIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ActivitiesApi();
            var id = 789;  // Long | The identifier of the activity.
            var page = 56;  // Integer | Page number. Defaults to 1. (optional) 
            var perPage = 56;  // Integer | Number of items per page. Defaults to 30. (optional)  (default to 30)

            try
            {
                // List Activity Kudoers
                array[SummaryAthlete] result = apiInstance.getKudoersByActivityId(id, page, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ActivitiesApi.getKudoersByActivityId: " + e.Message );
            }
        }
    }
}
```

```json
[
  {
    "firstname": "Peter",
    "lastname": "S"
  }
]
```

:::

:::docs-tab{language="python"}

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# Configure OAuth2 access token for authorization: strava_oauth
swagger_client.configuration.access_token = 'YOUR_ACCESS_TOKEN'

# create an instance of the API class
api_instance = swagger_client.ActivitiesApi()
id = 789 # Long | The identifier of the activity.
page = 56 # Integer | Page number. Defaults to 1. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Activity Kudoers
    api_response = api_instance.getKudoersByActivityId(id, page=page, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ActivitiesApi->getKudoersByActivityId: %s\n" % e)
```

```json
[
  {
    "firstname": "Peter",
    "lastname": "S"
  }
]
```

:::

::::
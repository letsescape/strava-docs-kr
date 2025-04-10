::::docs-panel{id=left target=#api-Activities-getCommentsByActivityId}

### 활동 주석 나열(getCommentsByActivityId)

주어진 활동에 대한 주석을 반환합니다. 활동 필요:모든 사람 및 추종자 활동에 대해 읽습니다. 나만의 활동에는 activity:read_all이 필요합니다.

:docs-http-method{method=get url=/activities/&#123;id&#125;/comments}

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
description="<a href='/docs/reference/#api-models-Comment'>Comment</a> 개체의 배열입니다."
}
:docs-table-row{
name="HTTP code 4xx, 5xx"
description="<a href='/docs/reference/#api-models-Fault'>오류</a>의 원인을 설명하는 오류입니다."
}
:::

::::

::::docs-panel{#right}
:::docs-tab{language=HTTPPie}

``` shell 
$ http GET "https://www.strava.com/api/v3/activities/{id}/comments?page=&per_page=" "Authorization: Bearer [[token]]"
```

```json
[
  {
    "id": 12345678987654321,
    "activity_id": 12345678987654321,
    "post_id": null,
    "resource_state": 2,
    "text": "Good job and keep the cat pictures coming!",
    "mentions_metadata": null,
    "created_at": "2018-02-08T19:25:39Z",
    "athlete": {
      "firstname": "Peter",
      "lastname": "S"
    }
  }
]
```

:::

:::docs-tab{language=java}

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

    Observable<List<Comment>> result = apiInstance.getCommentsByActivityId(id, page, perPage);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
[
  {
    "id": 12345678987654321,
    "activity_id": 12345678987654321,
    "post_id": null,
    "resource_state": 2,
    "text": "Good job and keep the cat pictures coming!",
    "mentions_metadata": null,
    "created_at": "2018-02-08T19:25:39Z",
    "athlete": {
      "firstname": "Peter",
      "lastname": "S"
    }
  }
]
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the activity.
Integer *page = 56; // Page number. Defaults to 1. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVActivitiesApi *apiInstance = [[STRVActivitiesApi alloc] init];

// List Activity Comments
[apiInstance getCommentsByActivityIdWith:id
    page:page
    perPage:perPage
              completionHandler: ^(NSArray<STRVComment>* output, NSError* error) {
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
    "id": 12345678987654321,
    "activity_id": 12345678987654321,
    "post_id": null,
    "resource_state": 2,
    "text": "Good job and keep the cat pictures coming!",
    "mentions_metadata": null,
    "created_at": "2018-02-08T19:25:39Z",
    "athlete": {
      "firstname": "Peter",
      "lastname": "S"
    }
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
api.getCommentsByActivityId(id, opts, callback);
```

```json
[
  {
    "id": 12345678987654321,
    "activity_id": 12345678987654321,
    "post_id": null,
    "resource_state": 2,
    "text": "Good job and keep the cat pictures coming!",
    "mentions_metadata": null,
    "created_at": "2018-02-08T19:25:39Z",
    "athlete": {
      "firstname": "Peter",
      "lastname": "S"
    }
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
    public class getCommentsByActivityIdExample
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
                // List Activity Comments
                array[Comment] result = apiInstance.getCommentsByActivityId(id, page, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ActivitiesApi.getCommentsByActivityId: " + e.Message );
            }
        }
    }
}
```

```json
[
  {
    "id": 12345678987654321,
    "activity_id": 12345678987654321,
    "post_id": null,
    "resource_state": 2,
    "text": "Good job and keep the cat pictures coming!",
    "mentions_metadata": null,
    "created_at": "2018-02-08T19:25:39Z",
    "athlete": {
      "firstname": "Peter",
      "lastname": "S"
    }
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
api_instance = swagger_client.ActivitiesApi()
id = 789 # Long | The identifier of the activity.
page = 56 # Integer | Page number. Defaults to 1. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Activity Comments
    api_response = api_instance.getCommentsByActivityId(id, page=page, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ActivitiesApi->getCommentsByActivityId: %s\n" % e)
```

```json
[
  {
    "id": 12345678987654321,
    "activity_id": 12345678987654321,
    "post_id": null,
    "resource_state": 2,
    "text": "Good job and keep the cat pictures coming!",
    "mentions_metadata": null,
    "created_at": "2018-02-08T19:25:39Z",
    "athlete": {
      "firstname": "Peter",
      "lastname": "S"
    }
  }
]
```

:::

::::
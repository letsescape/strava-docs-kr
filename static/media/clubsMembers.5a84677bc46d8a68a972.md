::::docs-panel{id=left target=#api-Clubs-getClubMembersById}

### List Club Members (getClubMembersById)

지정된 클럽의 구성원인 선수 목록을 반환합니다.

:docs-http-method{method=get url=/clubs/&lbrace;id&rbrace;/members}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="클럽의 식별자입니다."
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
description="<a href='/docs/reference/#api-models-SummaryAthlete'>SummaryAthlete</a>체의 배열입니다."
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
$ http GET "https://www.strava.com/api/v3/clubs/{id}/members?page=&per_page=" "Authorization: Bearer [[token]]"
```

```json
[
  {
    "resource_state": 2,
    "firstname": "Peter",
    "lastname": "S.",
    "membership": "member",
    "admin": false,
    "owner": false
  }
]
```

:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.ClubsApi;

import rx.Observable;

public class ClubsApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    ClubsApi api = client.createService(ClubsApi.class);

    Long id = 789; // Long | The identifier of the club.
    Integer page = 56; // Integer | Page number. Defaults to 1.
    Integer perPage = 56; // Integer | Number of items per page. Defaults to 30.

    Observable<List<SummaryAthlete>> result = apiInstance.getClubMembersById(id, page, perPage);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```

```json
[
  {
    "resource_state": 2,
    "firstname": "Peter",
    "lastname": "S.",
    "membership": "member",
    "admin": false,
    "owner": false
  }
]
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the club.
Integer *page = 56; // Page number. Defaults to 1. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVClubsApi *apiInstance = [[STRVClubsApi alloc] init];

// List Club Members
[apiInstance getClubMembersByIdWith:id
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
    "resource_state": 2,
    "firstname": "Peter",
    "lastname": "S.",
    "membership": "member",
    "admin": false,
    "owner": false
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

var api = new StravaApiV3.ClubsApi()

var id = 789; // {Long} The identifier of the club.

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
api.getClubMembersById(id, opts, callback);

```

```json
[
  {
    "resource_state": 2,
    "firstname": "Peter",
    "lastname": "S.",
    "membership": "member",
    "admin": false,
    "owner": false
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
    public class getClubMembersByIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ClubsApi();
            var id = 789;  // Long | The identifier of the club.
            var page = 56;  // Integer | Page number. Defaults to 1. (optional) 
            var perPage = 56;  // Integer | Number of items per page. Defaults to 30. (optional)  (default to 30)

            try
            {
                // List Club Members
                array[SummaryAthlete] result = apiInstance.getClubMembersById(id, page, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ClubsApi.getClubMembersById: " + e.Message );
            }
        }
    }
}

```

```json
[
  {
    "resource_state": 2,
    "firstname": "Peter",
    "lastname": "S.",
    "membership": "member",
    "admin": false,
    "owner": false
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
api_instance = swagger_client.ClubsApi()
id = 789 # Long | The identifier of the club.
page = 56 # Integer | Page number. Defaults to 1. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Club Members
    api_response = api_instance.getClubMembersById(id, page=page, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClubsApi->getClubMembersById: %s\n" % e)

```

```json
[
  {
    "resource_state": 2,
    "firstname": "Peter",
    "lastname": "S.",
    "membership": "member",
    "admin": false,
    "owner": false
  }
]
```

:::

::::

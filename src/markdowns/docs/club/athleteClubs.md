::::docs-panel{id=left target=#api-Clubs-getLoggedInAthleteClubs}

### 선수 클럽 목록 (getLoggedInAthleteClubs)

인증된 선수가 포함된 구성원 자격이 있는 클럽 목록을 반환합니다.

:docs-http-method{method=get url=/athlete/clubs}

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
description="<a href='/docs/reference/#api-models-SummaryClub'>SummaryClub</a>객체의 배열입니다."
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
$ http GET "https://www.strava.com/api/v3/athlete/clubs?page=&per_page=" "Authorization: Bearer [[token]]"
```

```json
[
  {
    "id": 231407,
    "resource_state": 2,
    "name": "The Strava Club",
    "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
    "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
    "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
    "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
    "sport_type": "other",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "private": false,
    "member_count": 93151,
    "featured": false,
    "verified": true,
    "url": "strava"
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

    Integer page = 56; // Integer | Page number. Defaults to 1.
    Integer perPage = 56; // Integer | Number of items per page. Defaults to 30.

    Observable<List<SummaryClub>> result = apiInstance.getLoggedInAthleteClubs(page, perPage);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
[
  {
    "id": 231407,
    "resource_state": 2,
    "name": "The Strava Club",
    "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
    "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
    "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
    "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
    "sport_type": "other",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "private": false,
    "member_count": 93151,
    "featured": false,
    "verified": true,
    "url": "strava"
  }
]

```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Integer *page = 56; // Page number. Defaults to 1. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVClubsApi *apiInstance = [[STRVClubsApi alloc] init];

// List Athlete Clubs
[apiInstance getLoggedInAthleteClubsWith:page
    perPage:perPage
              completionHandler: ^(NSArray<STRVSummaryClub>* output, NSError* error) {
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
    "id": 231407,
    "resource_state": 2,
    "name": "The Strava Club",
    "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
    "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
    "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
    "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
    "sport_type": "other",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "private": false,
    "member_count": 93151,
    "featured": false,
    "verified": true,
    "url": "strava"
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
api.getLoggedInAthleteClubs(opts, callback);
```

```json
[
  {
    "id": 231407,
    "resource_state": 2,
    "name": "The Strava Club",
    "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
    "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
    "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
    "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
    "sport_type": "other",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "private": false,
    "member_count": 93151,
    "featured": false,
    "verified": true,
    "url": "strava"
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
    public class getLoggedInAthleteClubsExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ClubsApi();
            var page = 56;  // Integer | Page number. Defaults to 1. (optional) 
            var perPage = 56;  // Integer | Number of items per page. Defaults to 30. (optional)  (default to 30)

            try
            {
                // List Athlete Clubs
                array[SummaryClub] result = apiInstance.getLoggedInAthleteClubs(page, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ClubsApi.getLoggedInAthleteClubs: " + e.Message );
            }
        }
    }
}
```

```json
[
  {
    "id": 231407,
    "resource_state": 2,
    "name": "The Strava Club",
    "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
    "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
    "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
    "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
    "sport_type": "other",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "private": false,
    "member_count": 93151,
    "featured": false,
    "verified": true,
    "url": "strava"
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
page = 56 # Integer | Page number. Defaults to 1. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Athlete Clubs
    api_response = api_instance.getLoggedInAthleteClubs(page=page, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClubsApi->getLoggedInAthleteClubs: %s\n" % e)
```

```json
[
  {
    "id": 231407,
    "resource_state": 2,
    "name": "The Strava Club",
    "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
    "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
    "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
    "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
    "sport_type": "other",
    "city": "San Francisco",
    "state": "California",
    "country": "United States",
    "private": false,
    "member_count": 93151,
    "featured": false,
    "verified": true,
    "url": "strava"
  }
]

```

:::

::::

::::docs-panel{id=left target=#api-Clubs-getClubById}

### 클럽 가져오기 (getClubById)

식별자를 사용하여 지정된 클럽을 반환합니다.

:docs-http-method{method=get url=/clubs/&lbrace;id&rbrace;}

#### Parameters

:::docs-table
:docs-table-row{
name="id"
requiredText="required Long, in path"
description="클럽의 식별자입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="클럽의 세부 표현입니다. <a href='/docs/reference/#api-models-DetailedClub'>DetailedClub</a>의 인스턴스입니다."
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
$ http GET "https://www.strava.com/api/v3/clubs/{id}" "Authorization: Bearer [[token]]"

```

```json
{
  "id": 1,
  "resource_state": 3,
  "name": "Team Strava Cycling",
  "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg",
  "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg",
  "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg",
  "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg",
  "sport_type": "cycling",
  "activity_types": [
    "Ride",
    "VirtualRide",
    "EBikeRide",
    "Velomobile",
    "Handcycle"
  ],
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "private": true,
  "member_count": 116,
  "featured": false,
  "verified": false,
  "url": "team-strava-bike",
  "membership": "member",
  "admin": false,
  "owner": false,
  "description": "Private club for Cyclists who work at Strava.",
  "club_type": "company",
  "post_count": 29,
  "owner_id": 759,
  "following_count": 107
}

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

    Observable<DetailedClub> result = apiInstance.getClubById(id);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```

```json
{
  "id": 1,
  "resource_state": 3,
  "name": "Team Strava Cycling",
  "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg",
  "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg",
  "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg",
  "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg",
  "sport_type": "cycling",
  "activity_types": [
    "Ride",
    "VirtualRide",
    "EBikeRide",
    "Velomobile",
    "Handcycle"
  ],
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "private": true,
  "member_count": 116,
  "featured": false,
  "verified": false,
  "url": "team-strava-bike",
  "membership": "member",
  "admin": false,
  "owner": false,
  "description": "Private club for Cyclists who work at Strava.",
  "club_type": "company",
  "post_count": 29,
  "owner_id": 759,
  "following_count": 107
}

```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Long *id = 789; // The identifier of the club.

STRVClubsApi *apiInstance = [[STRVClubsApi alloc] init];

// Get Club
[apiInstance getClubByIdWith:id
              completionHandler: ^(STRVDetailedClub output, NSError* error) {
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
  "id": 1,
  "resource_state": 3,
  "name": "Team Strava Cycling",
  "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg",
  "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg",
  "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg",
  "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg",
  "sport_type": "cycling",
  "activity_types": [
    "Ride",
    "VirtualRide",
    "EBikeRide",
    "Velomobile",
    "Handcycle"
  ],
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "private": true,
  "member_count": 116,
  "featured": false,
  "verified": false,
  "url": "team-strava-bike",
  "membership": "member",
  "admin": false,
  "owner": false,
  "description": "Private club for Cyclists who work at Strava.",
  "club_type": "company",
  "post_count": 29,
  "owner_id": 759,
  "following_count": 107
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

var api = new StravaApiV3.ClubsApi()

var id = 789; // {Long} The identifier of the club.


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getClubById(id, callback);

```

```json
{
  "id": 1,
  "resource_state": 3,
  "name": "Team Strava Cycling",
  "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg",
  "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg",
  "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg",
  "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg",
  "sport_type": "cycling",
  "activity_types": [
    "Ride",
    "VirtualRide",
    "EBikeRide",
    "Velomobile",
    "Handcycle"
  ],
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "private": true,
  "member_count": 116,
  "featured": false,
  "verified": false,
  "url": "team-strava-bike",
  "membership": "member",
  "admin": false,
  "owner": false,
  "description": "Private club for Cyclists who work at Strava.",
  "club_type": "company",
  "post_count": 29,
  "owner_id": 759,
  "following_count": 107
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
    public class getClubByIdExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ClubsApi();
            var id = 789;  // Long | The identifier of the club.

            try
            {
                // Get Club
                DetailedClub result = apiInstance.getClubById(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ClubsApi.getClubById: " + e.Message );
            }
        }
    }
}

```

```json
{
  "id": 1,
  "resource_state": 3,
  "name": "Team Strava Cycling",
  "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg",
  "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg",
  "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg",
  "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg",
  "sport_type": "cycling",
  "activity_types": [
    "Ride",
    "VirtualRide",
    "EBikeRide",
    "Velomobile",
    "Handcycle"
  ],
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "private": true,
  "member_count": 116,
  "featured": false,
  "verified": false,
  "url": "team-strava-bike",
  "membership": "member",
  "admin": false,
  "owner": false,
  "description": "Private club for Cyclists who work at Strava.",
  "club_type": "company",
  "post_count": 29,
  "owner_id": 759,
  "following_count": 107
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
api_instance = swagger_client.ClubsApi()
id = 789 # Long | The identifier of the club.

try: 
    # Get Club
    api_response = api_instance.getClubById(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClubsApi->getClubById: %s\n" % e)

```

```json
{
  "id": 1,
  "resource_state": 3,
  "name": "Team Strava Cycling",
  "profile_medium": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg",
  "profile": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg",
  "cover_photo": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg",
  "cover_photo_small": "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg",
  "sport_type": "cycling",
  "activity_types": [
    "Ride",
    "VirtualRide",
    "EBikeRide",
    "Velomobile",
    "Handcycle"
  ],
  "city": "San Francisco",
  "state": "California",
  "country": "United States",
  "private": true,
  "member_count": 116,
  "featured": false,
  "verified": false,
  "url": "team-strava-bike",
  "membership": "member",
  "admin": false,
  "owner": false,
  "description": "Private club for Cyclists who work at Strava.",
  "club_type": "company",
  "post_count": 29,
  "owner_id": 759,
  "following_count": 107
}

```

:::

::::

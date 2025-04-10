::::docs-panel{id=left target=#api-Activities-getCommentsByActivityId}

### 선수 업데이트 (updateLoggedInAthlete)

현재 인증된 선수를 업데이트합니다. 프로필: 쓰기 범위가 필요합니다.

:docs-http-method{method=put url=/athlete}

#### Parameters

:::docs-table
:docs-table-row{
name="weight"
requiredText="required Float, in path"
description="선수의 체중(kg 단위)."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="인증된 선수의 프로필 정보. <a href='/docs/reference/#api-models-DetailedAthlete'>DetailedAthlete</a>의 인스턴스입니다."
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
$ http PUT "https://www.strava.com/api/v3/athlete" "Authorization: Bearer [[token]]"
```

```json
{
  "id": 12345678987655098765444,
  "username": "marianne_v",
  "resource_state": 3,
  "firstname": "Marianne",
  "lastname": "V.",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "sex": "F",
  "premium": true,
  "created_at": "2017-11-14T02:30:05Z",
  "updated_at": "2018-02-06T19:32:20Z",
  "badge_type_id": 4,
  "profile_medium": "https://xxxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/medium.jpg",
  "profile": "https://xxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/large.jpg",
  "friend": null,
  "follower": null,
  "follower_count": 5,
  "friend_count": 5,
  "mutual_friend_count": 0,
  "athlete_type": 1,
  "date_preference": "%m/%d/%Y",
  "measurement_preference": "feet",
  "clubs": [],
  "ftp": null,
  "weight": 0,
  "bikes": [
    {
      "id": "b1234567898765509876",
      "primary": true,
      "name": "EMC",
      "resource_state": 2,
      "distance": 0
    }
  ],
  "shoes": [
    {
      "id": "g1234567898765509876",
      "primary": true,
      "name": "adidas",
      "resource_state": 2,
      "distance": 4904
    }
  ]
}
```

:::

:::docs-tab{language=java}

```java
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.AthletesApi;

import rx.Observable;

public class AthletesApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    AthletesApi api = client.createService(AthletesApi.class);

    Float weight = 3.4; // Float | The weight of the athlete in kilograms.

    Observable<DetailedAthlete> result = apiInstance.updateLoggedInAthlete(weight);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

```json
{
  "id": 12345678987655098765444,
  "username": "marianne_v",
  "resource_state": 3,
  "firstname": "Marianne",
  "lastname": "V.",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "sex": "F",
  "premium": true,
  "created_at": "2017-11-14T02:30:05Z",
  "updated_at": "2018-02-06T19:32:20Z",
  "badge_type_id": 4,
  "profile_medium": "https://xxxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/medium.jpg",
  "profile": "https://xxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/large.jpg",
  "friend": null,
  "follower": null,
  "follower_count": 5,
  "friend_count": 5,
  "mutual_friend_count": 0,
  "athlete_type": 1,
  "date_preference": "%m/%d/%Y",
  "measurement_preference": "feet",
  "clubs": [],
  "ftp": null,
  "weight": 0,
  "bikes": [
    {
      "id": "b1234567898765509876",
      "primary": true,
      "name": "EMC",
      "resource_state": 2,
      "distance": 0
    }
  ],
  "shoes": [
    {
      "id": "g1234567898765509876",
      "primary": true,
      "name": "adidas",
      "resource_state": 2,
      "distance": 4904
    }
  ]
}
```

:::

:::docs-tab{language=Obj-C}

```obj-c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Float *weight = 3.4; // The weight of the athlete in kilograms.

STRVAthletesApi *apiInstance = [[STRVAthletesApi alloc] init];

// Update Athlete
[apiInstance updateLoggedInAthleteWith:weight
              completionHandler: ^(STRVDetailedAthlete output, NSError* error) {
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
  "id": 12345678987655098765444,
  "username": "marianne_v",
  "resource_state": 3,
  "firstname": "Marianne",
  "lastname": "V.",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "sex": "F",
  "premium": true,
  "created_at": "2017-11-14T02:30:05Z",
  "updated_at": "2018-02-06T19:32:20Z",
  "badge_type_id": 4,
  "profile_medium": "https://xxxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/medium.jpg",
  "profile": "https://xxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/large.jpg",
  "friend": null,
  "follower": null,
  "follower_count": 5,
  "friend_count": 5,
  "mutual_friend_count": 0,
  "athlete_type": 1,
  "date_preference": "%m/%d/%Y",
  "measurement_preference": "feet",
  "clubs": [],
  "ftp": null,
  "weight": 0,
  "bikes": [
    {
      "id": "b1234567898765509876",
      "primary": true,
      "name": "EMC",
      "resource_state": 2,
      "distance": 0
    }
  ],
  "shoes": [
    {
      "id": "g1234567898765509876",
      "primary": true,
      "name": "adidas",
      "resource_state": 2,
      "distance": 4904
    }
  ]
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

var api = new StravaApiV3.AthletesApi()

var weight = 3.4; // {Float} The weight of the athlete in kilograms.


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.updateLoggedInAthlete(weight, callback);
```

```json
{
  "id": 12345678987655098765444,
  "username": "marianne_v",
  "resource_state": 3,
  "firstname": "Marianne",
  "lastname": "V.",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "sex": "F",
  "premium": true,
  "created_at": "2017-11-14T02:30:05Z",
  "updated_at": "2018-02-06T19:32:20Z",
  "badge_type_id": 4,
  "profile_medium": "https://xxxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/medium.jpg",
  "profile": "https://xxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/large.jpg",
  "friend": null,
  "follower": null,
  "follower_count": 5,
  "friend_count": 5,
  "mutual_friend_count": 0,
  "athlete_type": 1,
  "date_preference": "%m/%d/%Y",
  "measurement_preference": "feet",
  "clubs": [],
  "ftp": null,
  "weight": 0,
  "bikes": [
    {
      "id": "b1234567898765509876",
      "primary": true,
      "name": "EMC",
      "resource_state": 2,
      "distance": 0
    }
  ],
  "shoes": [
    {
      "id": "g1234567898765509876",
      "primary": true,
      "name": "adidas",
      "resource_state": 2,
      "distance": 4904
    }
  ]
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
    public class updateLoggedInAthleteExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AthletesApi();
            var weight = 3.4;  // Float | The weight of the athlete in kilograms.

            try
            {
                // Update Athlete
                DetailedAthlete result = apiInstance.updateLoggedInAthlete(weight);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling AthletesApi.updateLoggedInAthlete: " + e.Message );
            }
        }
    }
}
```

```json
{
  "id": 12345678987655098765444,
  "username": "marianne_v",
  "resource_state": 3,
  "firstname": "Marianne",
  "lastname": "V.",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "sex": "F",
  "premium": true,
  "created_at": "2017-11-14T02:30:05Z",
  "updated_at": "2018-02-06T19:32:20Z",
  "badge_type_id": 4,
  "profile_medium": "https://xxxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/medium.jpg",
  "profile": "https://xxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/large.jpg",
  "friend": null,
  "follower": null,
  "follower_count": 5,
  "friend_count": 5,
  "mutual_friend_count": 0,
  "athlete_type": 1,
  "date_preference": "%m/%d/%Y",
  "measurement_preference": "feet",
  "clubs": [],
  "ftp": null,
  "weight": 0,
  "bikes": [
    {
      "id": "b1234567898765509876",
      "primary": true,
      "name": "EMC",
      "resource_state": 2,
      "distance": 0
    }
  ],
  "shoes": [
    {
      "id": "g1234567898765509876",
      "primary": true,
      "name": "adidas",
      "resource_state": 2,
      "distance": 4904
    }
  ]
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
api_instance = swagger_client.AthletesApi()
weight = 3.4 # Float | The weight of the athlete in kilograms.

try: 
    # Update Athlete
    api_response = api_instance.updateLoggedInAthlete(weight)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AthletesApi->updateLoggedInAthlete: %s\n" % e)
```

```json
{
  "id": 12345678987655098765444,
  "username": "marianne_v",
  "resource_state": 3,
  "firstname": "Marianne",
  "lastname": "V.",
  "city": "San Francisco",
  "state": "CA",
  "country": "US",
  "sex": "F",
  "premium": true,
  "created_at": "2017-11-14T02:30:05Z",
  "updated_at": "2018-02-06T19:32:20Z",
  "badge_type_id": 4,
  "profile_medium": "https://xxxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/medium.jpg",
  "profile": "https://xxxxx.cloudfront.net/pictures/athletes/1234567898765509876/1234567898765509876/2/large.jpg",
  "friend": null,
  "follower": null,
  "follower_count": 5,
  "friend_count": 5,
  "mutual_friend_count": 0,
  "athlete_type": 1,
  "date_preference": "%m/%d/%Y",
  "measurement_preference": "feet",
  "clubs": [],
  "ftp": null,
  "weight": 0,
  "bikes": [
    {
      "id": "b1234567898765509876",
      "primary": true,
      "name": "EMC",
      "resource_state": 2,
      "distance": 0
    }
  ],
  "shoes": [
    {
      "id": "g1234567898765509876",
      "primary": true,
      "name": "adidas",
      "resource_state": 2,
      "distance": 4904
    }
  ]
}
```

:::

::::

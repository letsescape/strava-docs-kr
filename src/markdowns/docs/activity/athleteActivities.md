::::docs-panel{id=left target=#api-Activities-getLoggedInAthleteActivities}

### 선수 활동 목록 (getLoggedInAthleteActivities)

특정 식별자에 대한 선수의 활동을 반환합니다. 활동: 읽기가 필요합니다. 나만의 활동은
액티비티가 있는 토큰에서 요청하지 않는 한 필터링됩니다. read_all.

:docs-http-method{method=get url=/athlete/activities}

#### Parameters

:::docs-table
:docs-table-row{
name="before"
requiredText="Integer, in query"
description="특정 시간 이전에 수행된 작업을 필터링하는 데 사용할 에폭 타임스탬프입니다."
}
:docs-table-row{
name="after"
requiredText="Integer, in query"
description="특정 시간 이후에 수행된 작업을 필터링하는 데 사용할 에폭 타임스탬프입니다."
}
:docs-table-row{
name="page"
requiredText="Integer, in query"
description="페이지 번호. 기본값은 1입니다."
}
:docs-table-row{
name="id"
requiredText="Integer, in query"
description="페이지당 항목 수입니다. 기본값은 30입니다."
}
:::

#### Responses

:::docs-table
:docs-table-row{
name="HTTP code 200"
description="<a href='/docs/reference/#api-models-SummaryActivity'>SummaryActivity</a> 객체의 배열입니다."
}
:docs-table-row{
name="HTTP code 4xx, 5xx"
description="<a href='/docs/reference/#api-models-Fault'>오류</a>의 원인을 설명하는 오류입니다."
}
:::

::::

::::docs-panel{#right}

:::docs-tab{language=HTTPie}

```shell
$ http GET "https://www.strava.com/api/v3/athlete/activities?before=&after=&page=&per_page=" "Authorization: Bearer [[token]]"

```

```json
[
  {
    "resource_state": 2,
    "athlete": {
      "id": 134815,
      "resource_state": 1
    },
    "name": "Happy Friday",
    "distance": 24931.4,
    "moving_time": 4500,
    "elapsed_time": 4500,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 154504250376823,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 987654321234567891234,
    "start_date": "2018-05-02T12:15:09Z",
    "start_date_local": "2018-05-02T05:15:09Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 3,
    "comment_count": 1,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345678987654321",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678987654321",
    "from_accepted_tag": false,
    "average_speed": 5.54,
    "max_speed": 11,
    "average_cadence": 67.1,
    "average_watts": 175.3,
    "weighted_average_watts": 210,
    "kilojoules": 788.7,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 140.3,
    "max_heartrate": 178,
    "max_watts": 406,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 82
  },
  {
    "resource_state": 2,
    "athlete": {
      "id": 167560,
      "resource_state": 1
    },
    "name": "Bondcliff",
    "distance": 23676.5,
    "moving_time": 5400,
    "elapsed_time": 5400,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 1234567809,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 1234567819,
    "start_date": "2018-04-30T12:35:51Z",
    "start_date_local": "2018-04-30T05:35:51Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 4,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345689",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678912343",
    "from_accepted_tag": false,
    "average_speed": 4.385,
    "max_speed": 8.8,
    "average_cadence": 69.8,
    "average_watts": 200,
    "weighted_average_watts": 214,
    "kilojoules": 1080,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 152.4,
    "max_heartrate": 183,
    "max_watts": 403,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 162
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

    Integer before = 56; // Integer | An epoch timestamp to use for filtering activities that have taken place before a certain time.
    Integer after = 56; // Integer | An epoch timestamp to use for filtering activities that have taken place after a certain time.
    Integer page = 56; // Integer | Page number. Defaults to 1.
    Integer perPage = 56; // Integer | Number of items per page. Defaults to 30.

    Observable<List<SummaryActivity>> result = apiInstance.getLoggedInAthleteActivities(before, after, page, perPage);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}

```

```json
[
  {
    "resource_state": 2,
    "athlete": {
      "id": 134815,
      "resource_state": 1
    },
    "name": "Happy Friday",
    "distance": 24931.4,
    "moving_time": 4500,
    "elapsed_time": 4500,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 154504250376823,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 987654321234567891234,
    "start_date": "2018-05-02T12:15:09Z",
    "start_date_local": "2018-05-02T05:15:09Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 3,
    "comment_count": 1,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345678987654321",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678987654321",
    "from_accepted_tag": false,
    "average_speed": 5.54,
    "max_speed": 11,
    "average_cadence": 67.1,
    "average_watts": 175.3,
    "weighted_average_watts": 210,
    "kilojoules": 788.7,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 140.3,
    "max_heartrate": 178,
    "max_watts": 406,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 82
  },
  {
    "resource_state": 2,
    "athlete": {
      "id": 167560,
      "resource_state": 1
    },
    "name": "Bondcliff",
    "distance": 23676.5,
    "moving_time": 5400,
    "elapsed_time": 5400,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 1234567809,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 1234567819,
    "start_date": "2018-04-30T12:35:51Z",
    "start_date_local": "2018-04-30T05:35:51Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 4,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345689",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678912343",
    "from_accepted_tag": false,
    "average_speed": 4.385,
    "max_speed": 8.8,
    "average_cadence": 69.8,
    "average_watts": 200,
    "weighted_average_watts": 214,
    "kilojoules": 1080,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 152.4,
    "max_heartrate": 183,
    "max_watts": 403,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 162
  }
]
```

:::

:::docs-tab{language=Obj-C}

```c
Configuration *apiConfig = [Configuration sharedConfig];

// Configure OAuth2 access token for authorization: (authentication scheme: strava_oauth)
[apiConfig setAccessToken:@"YOUR_ACCESS_TOKEN"];

Integer *before = 56; // An epoch timestamp to use for filtering activities that have taken place before a certain time. (optional)
Integer *after = 56; // An epoch timestamp to use for filtering activities that have taken place after a certain time. (optional)
Integer *page = 56; // Page number. Defaults to 1. (optional)
Integer *perPage = 56; // Number of items per page. Defaults to 30. (optional) (default to 30)

STRVActivitiesApi *apiInstance = [[STRVActivitiesApi alloc] init];

// List Athlete Activities
[apiInstance getLoggedInAthleteActivitiesWith:before
    after:after
    page:page
    perPage:perPage
              completionHandler: ^(NSArray<STRVSummaryActivity>* output, NSError* error) {
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
    "athlete": {
      "id": 134815,
      "resource_state": 1
    },
    "name": "Happy Friday",
    "distance": 24931.4,
    "moving_time": 4500,
    "elapsed_time": 4500,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 154504250376823,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 987654321234567891234,
    "start_date": "2018-05-02T12:15:09Z",
    "start_date_local": "2018-05-02T05:15:09Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 3,
    "comment_count": 1,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345678987654321",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678987654321",
    "from_accepted_tag": false,
    "average_speed": 5.54,
    "max_speed": 11,
    "average_cadence": 67.1,
    "average_watts": 175.3,
    "weighted_average_watts": 210,
    "kilojoules": 788.7,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 140.3,
    "max_heartrate": 178,
    "max_watts": 406,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 82
  },
  {
    "resource_state": 2,
    "athlete": {
      "id": 167560,
      "resource_state": 1
    },
    "name": "Bondcliff",
    "distance": 23676.5,
    "moving_time": 5400,
    "elapsed_time": 5400,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 1234567809,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 1234567819,
    "start_date": "2018-04-30T12:35:51Z",
    "start_date_local": "2018-04-30T05:35:51Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 4,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345689",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678912343",
    "from_accepted_tag": false,
    "average_speed": 4.385,
    "max_speed": 8.8,
    "average_cadence": 69.8,
    "average_watts": 200,
    "weighted_average_watts": 214,
    "kilojoules": 1080,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 152.4,
    "max_heartrate": 183,
    "max_watts": 403,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 162
  }
]
```

:::

:::docs-tab{language=JavaScript}

```javascript
var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var opts = {
    'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
    'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
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
api.getLoggedInAthleteActivities(opts, callback);


```

```json
[
  {
    "resource_state": 2,
    "athlete": {
      "id": 134815,
      "resource_state": 1
    },
    "name": "Happy Friday",
    "distance": 24931.4,
    "moving_time": 4500,
    "elapsed_time": 4500,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 154504250376823,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 987654321234567891234,
    "start_date": "2018-05-02T12:15:09Z",
    "start_date_local": "2018-05-02T05:15:09Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 3,
    "comment_count": 1,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345678987654321",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678987654321",
    "from_accepted_tag": false,
    "average_speed": 5.54,
    "max_speed": 11,
    "average_cadence": 67.1,
    "average_watts": 175.3,
    "weighted_average_watts": 210,
    "kilojoules": 788.7,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 140.3,
    "max_heartrate": 178,
    "max_watts": 406,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 82
  },
  {
    "resource_state": 2,
    "athlete": {
      "id": 167560,
      "resource_state": 1
    },
    "name": "Bondcliff",
    "distance": 23676.5,
    "moving_time": 5400,
    "elapsed_time": 5400,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 1234567809,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 1234567819,
    "start_date": "2018-04-30T12:35:51Z",
    "start_date_local": "2018-04-30T05:35:51Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 4,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345689",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678912343",
    "from_accepted_tag": false,
    "average_speed": 4.385,
    "max_speed": 8.8,
    "average_cadence": 69.8,
    "average_watts": 200,
    "weighted_average_watts": 214,
    "kilojoules": 1080,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 152.4,
    "max_heartrate": 183,
    "max_watts": 403,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 162
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
    public class getLoggedInAthleteActivitiesExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ActivitiesApi();
            var before = 56;  // Integer | An epoch timestamp to use for filtering activities that have taken place before a certain time. (optional) 
            var after = 56;  // Integer | An epoch timestamp to use for filtering activities that have taken place after a certain time. (optional) 
            var page = 56;  // Integer | Page number. Defaults to 1. (optional) 
            var perPage = 56;  // Integer | Number of items per page. Defaults to 30. (optional)  (default to 30)

            try
            {
                // List Athlete Activities
                array[SummaryActivity] result = apiInstance.getLoggedInAthleteActivities(before, after, page, perPage);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ActivitiesApi.getLoggedInAthleteActivities: " + e.Message );
            }
        }
    }
}

```

```json
[
  {
    "resource_state": 2,
    "athlete": {
      "id": 134815,
      "resource_state": 1
    },
    "name": "Happy Friday",
    "distance": 24931.4,
    "moving_time": 4500,
    "elapsed_time": 4500,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 154504250376823,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 987654321234567891234,
    "start_date": "2018-05-02T12:15:09Z",
    "start_date_local": "2018-05-02T05:15:09Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 3,
    "comment_count": 1,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345678987654321",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678987654321",
    "from_accepted_tag": false,
    "average_speed": 5.54,
    "max_speed": 11,
    "average_cadence": 67.1,
    "average_watts": 175.3,
    "weighted_average_watts": 210,
    "kilojoules": 788.7,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 140.3,
    "max_heartrate": 178,
    "max_watts": 406,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 82
  },
  {
    "resource_state": 2,
    "athlete": {
      "id": 167560,
      "resource_state": 1
    },
    "name": "Bondcliff",
    "distance": 23676.5,
    "moving_time": 5400,
    "elapsed_time": 5400,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 1234567809,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 1234567819,
    "start_date": "2018-04-30T12:35:51Z",
    "start_date_local": "2018-04-30T05:35:51Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 4,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345689",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678912343",
    "from_accepted_tag": false,
    "average_speed": 4.385,
    "max_speed": 8.8,
    "average_cadence": 69.8,
    "average_watts": 200,
    "weighted_average_watts": 214,
    "kilojoules": 1080,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 152.4,
    "max_heartrate": 183,
    "max_watts": 403,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 162
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
before = 56 # Integer | An epoch timestamp to use for filtering activities that have taken place before a certain time. (optional)
after = 56 # Integer | An epoch timestamp to use for filtering activities that have taken place after a certain time. (optional)
page = 56 # Integer | Page number. Defaults to 1. (optional)
perPage = 56 # Integer | Number of items per page. Defaults to 30. (optional) (default to 30)

try: 
    # List Athlete Activities
    api_response = api_instance.getLoggedInAthleteActivities(before=before, after=after, page=page, perPage=perPage)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ActivitiesApi->getLoggedInAthleteActivities: %s\n" % e)

```

```json
[
  {
    "resource_state": 2,
    "athlete": {
      "id": 134815,
      "resource_state": 1
    },
    "name": "Happy Friday",
    "distance": 24931.4,
    "moving_time": 4500,
    "elapsed_time": 4500,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 154504250376823,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 987654321234567891234,
    "start_date": "2018-05-02T12:15:09Z",
    "start_date_local": "2018-05-02T05:15:09Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 3,
    "comment_count": 1,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345678987654321",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678987654321",
    "from_accepted_tag": false,
    "average_speed": 5.54,
    "max_speed": 11,
    "average_cadence": 67.1,
    "average_watts": 175.3,
    "weighted_average_watts": 210,
    "kilojoules": 788.7,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 140.3,
    "max_heartrate": 178,
    "max_watts": 406,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 82
  },
  {
    "resource_state": 2,
    "athlete": {
      "id": 167560,
      "resource_state": 1
    },
    "name": "Bondcliff",
    "distance": 23676.5,
    "moving_time": 5400,
    "elapsed_time": 5400,
    "total_elevation_gain": 0,
    "type": "Ride",
    "sport_type": "MountainBikeRide",
    "workout_type": null,
    "id": 1234567809,
    "external_id": "garmin_push_12345678987654321",
    "upload_id": 1234567819,
    "start_date": "2018-04-30T12:35:51Z",
    "start_date_local": "2018-04-30T05:35:51Z",
    "timezone": "(GMT-08:00) America/Los_Angeles",
    "utc_offset": -25200,
    "start_latlng": null,
    "end_latlng": null,
    "location_city": null,
    "location_state": null,
    "location_country": "United States",
    "achievement_count": 0,
    "kudos_count": 4,
    "comment_count": 0,
    "athlete_count": 1,
    "photo_count": 0,
    "map": {
      "id": "a12345689",
      "summary_polyline": null,
      "resource_state": 2
    },
    "trainer": true,
    "commute": false,
    "manual": false,
    "private": false,
    "flagged": false,
    "gear_id": "b12345678912343",
    "from_accepted_tag": false,
    "average_speed": 4.385,
    "max_speed": 8.8,
    "average_cadence": 69.8,
    "average_watts": 200,
    "weighted_average_watts": 214,
    "kilojoules": 1080,
    "device_watts": true,
    "has_heartrate": true,
    "average_heartrate": 152.4,
    "max_heartrate": 183,
    "max_watts": 403,
    "pr_count": 0,
    "total_photo_count": 1,
    "has_kudoed": false,
    "suffer_score": 162
  }
]
```

:::

::::
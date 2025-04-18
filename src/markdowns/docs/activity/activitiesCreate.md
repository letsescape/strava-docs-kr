::::docs-panel{id=left target=#api-Activities-createActivity}

### 활동 만들기(createActivity)

운동선수를 위한 수동 활동을 만들고 활동 쓰기 범위가 필요합니다.

:docs-http-method{method=post url=/activities}

#### Parameters

:::docs-table
:docs-table-row{
name="name"
requiredText="required String, in form"
description="활동의 이름입니다."
}

:docs-table-row{
name="type"
requiredText="String, in form"
description="활동 유형. 예 - 달리기, 타기 등"
}

:docs-table-row{
name="sport_type"
requiredText="required String, in form"
description="스포츠 활동 유형. 예 - Run, MountainBikeRide, Ride 등"
}

:docs-table-row{
name="start_date_local"
requiredText="required Date, in form"
description="ISO 8601 형식의 날짜 시간."
}

:docs-table-row{
name="elapsed_time"
requiredText="required Integer, in form"
description="몇 초 안에."
}

:docs-table-row{
name="description"
requiredText="String, in form"
description="활동에 대한 설명입니다."
}

:docs-table-row{
name="distance"
requiredText="Float, in form"
description="미터 단위."
}

:docs-table-row{
name="trainer"
requiredText="Integer, in form  "
description="트레이너 활동으로 표시하려면 1로 설정합니다."
}

:docs-table-row{
name="commute"
requiredText="Integer, in form"
description="통근으로 표시하려면 1로 설정합니다."
}
:::

#### Responses

:::docs-table

:docs-table-row{
name="HTTP code 201"
description="활동의 자세한 표현입니다. <a href='/docs/reference/#api-models-DetailedActivity'>DetailsActivity</a> 의 인스턴스입니다 ."
}
:docs-table-row{
name="HTTP code 4xx, 5xx"
description="<a href='/docs/reference/#api-models-Fault'>오류</a> 의 원인을 설명하는 오류입니다 ."
}

:::

::::

::::docs-panel{#right}

:::docs-tab{language=HTTPPie}

``` shell
$ http POST "https://www.strava.com/api/v3/activities" name='value' type='value' start_date_local='value' elapsed_time='value' description='value' distance='value' trainer='value' commute='value' hide_from_home='value' "Authorization: Bearer [[token]]"
```

``` json
{
  "id" : 12345678987654321,
  "resource_state" : 3,
  "external_id" : "garmin_push_12345678987654321",
  "upload_id" : 98765432123456789,
  "athlete" : {
    "id" : 134815,
    "resource_state" : 1
  },
  "name" : "Happy Friday",
  "distance" : 28099,
  "moving_time" : 4207,
  "elapsed_time" : 4410,
  "total_elevation_gain" : 516,
  "type" : "Ride",
  "start_date" : "2018-02-16T14:52:54Z",
  "start_date_local" : "2018-02-16T06:52:54Z",
  "timezone" : "(GMT-08:00) America/Los_Angeles",
  "utc_offset" : -28800,
  "start_latlng" : [ 37.83, -122.26 ],
  "end_latlng" : [ 37.83, -122.26 ],
  "achievement_count" : 0,
  "kudos_count" : 19,
  "comment_count" : 0,
  "athlete_count" : 1,
  "photo_count" : 0,
  "map" : {
    "id" : "a1410355832",
    "polyline" : "ki{eFvqfiVqAWQIGEEKAYJgBVqDJ{BHa@jAkNJw@Pw@V{APs@^aABQAOEQGKoJ_FuJkFqAo@{A}@sH{DiAs@Q]?WVy@`@oBt@_CB]KYMMkB{AQEI@WT{BlE{@zAQPI@ICsCqA_BcAeCmAaFmCqIoEcLeG}KcG}A}@cDaBiDsByAkAuBqBi@y@_@o@o@kB}BgIoA_EUkAMcACa@BeBBq@LaAJe@b@uA`@_AdBcD`@iAPq@RgALqAB{@EqAyAoOCy@AmCBmANqBLqAZkB\\iCPiBJwCCsASiCq@iD]eA]y@[i@w@mAa@i@k@g@kAw@i@Ya@Q]EWFMLa@~BYpAFNpA`Aj@n@X`@V`AHh@JfB@xAMvAGZGHIDIAWOEQNcC@sACYK[MSOMe@QKKKYOs@UYQISCQ?Q@WNo@r@OHGAGCKOQ_BU}@MQGG]Io@@c@FYNg@d@s@d@ODQAMOMaASs@_@a@SESAQDqBn@a@RO?KK?UBU\\kA@Y?WMo@Iy@GWQ_@WSSGg@AkABQB_Ap@_A^o@b@Q@o@IS@OHi@n@OFS?OI}@iAQMQGQC}@DOIIUK{@IUOMyBo@kASOKIQCa@L[|AgATWN[He@?QKw@FOPCh@Fx@l@TDLELKl@aAHIJEX@r@ZTDV@LENQVg@RkA@c@MeA?WFOPMf@Ej@Fj@@LGHKDM?_@_@iC?a@HKRIl@NT?FCHMFW?YEYGWQa@GYBiAIq@Gq@L_BHSHK|@WJETSLQZs@z@_A~@uA^U`@G\\CRB\\Tl@p@Th@JZ^bB`@lAHLXVLDP?LGFSKiDBo@d@wBVi@R]VYVE\\@`@Lh@Fh@CzAk@RSDQA]GYe@eAGWSiBAWBWBIJORK`@KPOPSTg@h@}Ad@o@F[E_@EGMKUGmAEYGMIMYKs@?a@J}@@_BD_@HQJMx@e@LKHKHWAo@UoAAWFmAH}@?w@C[YwAAc@HSNM|Ao@rA}@zAq@`@a@j@eAxAuBXQj@MXSR[b@gAFg@?YISOGaAHi@Xw@v@_@d@WRSFqARUHQJc@d@m@`A[VSFUBcAEU@WFULUPa@v@Y~@UrBc@dBI~@?l@P~ABt@N`HEjA]zAEp@@p@TrBCl@CTQb@k@dAg@jAU^KJYLK@k@A[Js@d@a@b@]RgBl@[FMAw@[]G]?m@D_@F]P[Vu@t@[TMF_@Do@E_@@q@P]PWZUZw@vAkAlAGJOj@IlAMd@OR{@p@a@d@sBpD]v@a@`Aa@n@]TODgBVk@Pe@^cBfBc@Rs@La@RSPm@|@wCpDS^Wp@QZML{@l@qBbCYd@k@lAIVCZBZNTr@`@RRHZANIZQPKDW@e@CaASU?I@YTKRQx@@\\VmALYRQLCL?v@P|@D\\GJEFKDM@OCa@COOYIGm@YMUCM@]JYr@uAx@kAt@}@jAeAPWbAkBj@s@bAiAz@oAj@m@VQlAc@VQ~@aA`Au@p@Q`AIv@MZORUV_@p@iB|AoCh@q@dAaANUNWH[N{AJ[^m@t@_Av@wA\\a@`@W`@In@Al@B^E`@Wl@u@\\[VQ\\K`@Eb@?R@dAZP@d@CRExAs@\\Yt@{@LG\\MjAATINOXo@d@kAl@_AHYBOCe@QiBCm@Fq@\\wADo@AyGEeBWuB@YHu@Tu@Lk@VcCTo@d@aA\\WJE`@G~@FP?VI\\U~@sANO`@SfAMj@U\\WjAsAXS`@UNENALBHFFL?^Ml@Uj@]b@q@RUJSPkChEc@XcAb@sA|@]PaA\\OJKNER?TDTNj@Jn@?p@OfC@ZR`B@VCV_@n@{@l@WbACv@OlABnAPl@LNNHbBBNBLFFJ@^GLg@x@i@|AMP[X}@XOJKPET?l@LhAFXp@fBDRCd@S\\_@Ps@PQ@}A]S?QDe@V]b@MR[fAKt@ErAF~CANILYDKGIKe@{@Yy@e@sB[gA[c@e@YUCU?WBUHUNQPq@`AiArAMV[^e@Zc@JQJKNMz@?r@Bb@PfAAfA@VVbADn@E`@KHSEe@SMAKDKFM\\^dDCh@m@LoAQ_@@MFOZLfBEl@QbASd@KLQBOAaAc@QAQ@QHc@v@ONMJOBOCg@c@]O[EMBKFGL?RHv@ARERGNe@h@{@h@WVGNDt@JLNFPFz@LdBf@f@PJNHPF`ADPJJJDl@I`@B^Tp@bALJNDNALIf@i@PGPCt@DNE`@Uv@[dAw@RITGRCtAARBPJLPJRZxB?VEX_@vAAR?RDNHJJBh@UnBm@h@IRDRJNNJPNbBFRJLLBLCzAmAd@Uf@Gf@?P@PFJNHPFTH`BDTHNJJJ@LG`@m@^YPER@RDPHNNJRLn@HRLN^VNPHTFX@\\UlDFb@FHh@NP@HKPsB?}ASkCQ{@[y@q@}@cA{@KOCQDa@t@{CFGJCf@Nl@ZtA~@r@p@`@h@rAxBd@rA\\fARdAPjANrB?f@AtBCd@QfBkAjJOlBChA?rBFrBNlBdAfKFzAC~@Iz@Mz@Sv@s@jBmAxBi@hAWt@Sv@Qx@O`BA`@?dAPfBVpAd@`BfBlFf@fBdA~Cr@pAz@fApBhBjAt@H?IL?FBFJLx@^lHvDvh@~XnElCbAd@pGhDbAb@nAr@`Ad@`GhDnBbAxCbBrWhNJJDPARGP_@t@Qh@]pAUtAoA`Ny@jJApBBNFLJFJBv@Hb@HBF?\\",
    "resource_state" : 3,
    "summary_polyline" : "ki{eFvqfiVsBmA`Feh@qg@iX`B}JeCcCqGjIq~@kf@cM{KeHeX`@_GdGkSeBiXtB}YuEkPwFyDeAzAe@pC~DfGc@bIOsGmCcEiD~@oBuEkFhBcBmDiEfAVuDiAuD}NnDaNiIlCyDD_CtJKv@wGhD]YyEzBo@g@uKxGmHpCGtEtI~AuLrHkAcAaIvEgH_EaDR_FpBuBg@sNxHqEtHgLoTpIiCzKNr[sB|Es\\`JyObYeMbGsMnPsAfDxAnD}DBu@bCx@{BbEEyAoD`AmChNoQzMoGhOwX|[yIzBeFKg[zAkIdU_LiHxK}HzEh@vM_BtBg@xGzDbCcF~GhArHaIfByAhLsDiJuC?_HbHd@nL_Cz@ZnEkDDy@hHwJLiCbIrNrIvN_EfAjDWlEnEiAfBxDlFkBfBtEfDaAzBvDKdFx@|@XgJmDsHhAgD`GfElEzOwBnYdBxXgGlSc@bGdHpW|HdJztBnhAgFxc@HnCvBdA"
  },
  "trainer" : false,
  "commute" : false,
  "manual" : false,
  "private" : false,
  "flagged" : false,
  "gear_id" : "b12345678987654321",
  "from_accepted_tag" : false,
  "average_speed" : 6.679,
  "max_speed" : 18.5,
  "average_cadence" : 78.5,
  "average_temp" : 4,
  "average_watts" : 185.5,
  "weighted_average_watts" : 230,
  "kilojoules" : 780.5,
  "device_watts" : true,
  "has_heartrate" : false,
  "max_watts" : 743,
  "elev_high" : 446.6,
  "elev_low" : 17.2,
  "pr_count" : 0,
  "total_photo_count" : 2,
  "has_kudoed" : false,
  "workout_type" : 10,
  "suffer_score" : null,
  "description" : "",
  "calories" : 870.2,
  "segment_efforts" : [ {
    "id" : 12345678987654321,
    "resource_state" : 2,
    "name" : "Tunnel Rd.",
    "activity" : {
      "id" : 12345678987654321,
      "resource_state" : 1
    },
    "athlete" : {
      "id" : 134815,
      "resource_state" : 1
    },
    "elapsed_time" : 2038,
    "moving_time" : 2038,
    "start_date" : "2018-02-16T14:56:25Z",
    "start_date_local" : "2018-02-16T06:56:25Z",
    "distance" : 9434.8,
    "start_index" : 211,
    "end_index" : 2246,
    "average_cadence" : 78.6,
    "device_watts" : true,
    "average_watts" : 237.6,
    "segment" : {
      "id" : 673683,
      "resource_state" : 2,
      "name" : "Tunnel Rd.",
      "activity_type" : "Ride",
      "distance" : 9220.7,
      "average_grade" : 4.2,
      "maximum_grade" : 25.8,
      "elevation_high" : 426.5,
      "elevation_low" : 43.4,
      "start_latlng" : [ 37.8346153, -122.2520872 ],
      "end_latlng" : [ 37.8476261, -122.2008944 ],
      "climb_category" : 3,
      "city" : "Oakland",
      "state" : "CA",
      "country" : "United States",
      "private" : false,
      "hazardous" : false,
      "starred" : false
    },
    "kom_rank" : null,
    "pr_rank" : null,
    "achievements" : [ ],
    "hidden" : false
  } ],
  "splits_metric" : [ {
    "distance" : 1001.5,
    "elapsed_time" : 141,
    "elevation_difference" : 4.4,
    "moving_time" : 141,
    "split" : 1,
    "average_speed" : 7.1,
    "pace_zone" : 0
  } ],
  "laps" : [ {
    "id" : 4479306946,
    "resource_state" : 2,
    "name" : "Lap 1",
    "activity" : {
      "id" : 1410355832,
      "resource_state" : 1
    },
    "athlete" : {
      "id" : 134815,
      "resource_state" : 1
    },
    "elapsed_time" : 1573,
    "moving_time" : 1569,
    "start_date" : "2018-02-16T14:52:54Z",
    "start_date_local" : "2018-02-16T06:52:54Z",
    "distance" : 8046.72,
    "start_index" : 0,
    "end_index" : 1570,
    "total_elevation_gain" : 276,
    "average_speed" : 5.12,
    "max_speed" : 9.5,
    "average_cadence" : 78.6,
    "device_watts" : true,
    "average_watts" : 233.1,
    "lap_index" : 1,
    "split" : 1
  } ],
  "gear" : {
    "id" : "b12345678987654321",
    "primary" : true,
    "name" : "Tarmac",
    "resource_state" : 2,
    "distance" : 32547610
  },
  "partner_brand_tag" : null,
  "photos" : {
    "primary" : {
      "id" : null,
      "unique_id" : "3FDGKL3-204E-4867-9E8D-89FC79EAAE17",
      "urls" : {
        "100" : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-128x96.jpg",
        "600" : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-768x576.jpg"
      },
      "source" : 1
    },
    "use_primary_photo" : true,
    "count" : 2
  },
  "highlighted_kudosers" : [ {
    "destination_url" : "strava://athletes/12345678987654321",
    "display_name" : "Marianne V.",
    "avatar_url" : "https://dgalywyr863hv.cloudfront.net/pictures/athletes/12345678987654321/12345678987654321/3/medium.jpg",
    "show_name" : true
  } ],
  "hide_from_home" : false,
  "device_name" : "Garmin Edge 1030",
  "embed_token" : "18e4615989b47dd4ff3dc711b0aa4502e4b311a9",
  "segment_leaderboard_opt_out" : false,
  "leaderboard_opt_out" : false
}

```

:::

:::docs-tab{language=java}

``` javascript
import com.strava.api.v3.*;
import com.strava.api.v3.auth.*;
import com.strava.api.v3.model.*;
import com.strava.api.v3.api.ActivitiesApi;

import rx.Observable;

public class ActivitiesApiExample {
  public static void main(String... args) {
    ApiClient client = new ApiClient(...);
    ActivitiesApi api = client.createService(ActivitiesApi.class);

    String name = name_example; // String | The name of the activity.
    String sportType = sportType_example; // String | Sport type of activity. For example - Run, MountainBikeRide, Ride, etc.
    Date startDateLocal = 2013-10-20T19:20:30+01:00; // Date | ISO 8601 formatted date time.
    Integer elapsedTime = 56; // Integer | In seconds.
    String type = type_example; // String | Type of activity. For example - Run, Ride etc.
    String description = description_example; // String | Description of the activity.
    Float distance = 3.4; // Float | In meters.
    Integer trainer = 56; // Integer | Set to 1 to mark as a trainer activity.
    Integer commute = 56; // Integer | Set to 1 to mark as commute.

    Observable<DetailedActivity> result = apiInstance.createActivity(name, sportType, startDateLocal, elapsedTime, type, description, distance, trainer, commute);
    result.subscribe(System.out::println, Throwable::printStackTrace);
  }
}
```

``` javascript
{
  "id" : 123456778928065,
  "resource_state" : 3,
  "external_id" : null,
  "upload_id" : null,
  "athlete" : {
    "id" : 12343545645788,
    "resource_state" : 1
  },
  "name" : "Chill Day",
  "distance" : 0,
  "moving_time" : 18373,
  "elapsed_time" : 18373,
  "total_elevation_gain" : 0,
  "type" : "Ride",
  "sport_type" : "MountainBikeRide",
  "start_date" : "2018-02-20T18:02:13Z",
  "start_date_local" : "2018-02-20T10:02:13Z",
  "timezone" : "(GMT-08:00) America/Los_Angeles",
  "utc_offset" : -28800,
  "achievement_count" : 0,
  "kudos_count" : 0,
  "comment_count" : 0,
  "athlete_count" : 1,
  "photo_count" : 0,
  "map" : {
    "id" : "a12345678908766",
    "polyline" : null,
    "resource_state" : 3
  },
  "trainer" : false,
  "commute" : false,
  "manual" : true,
  "private" : false,
  "flagged" : false,
  "gear_id" : "b453542543",
  "from_accepted_tag" : null,
  "average_speed" : 0,
  "max_speed" : 0,
  "device_watts" : false,
  "has_heartrate" : false,
  "pr_count" : 0,
  "total_photo_count" : 0,
  "has_kudoed" : false,
  "workout_type" : null,
  "description" : null,
  "calories" : 0,
  "segment_efforts" : [ ]
}
```

:::

:::docs-tab{language=Obj-C}

``` c
String *name = name_example; // The name of the activity.
String *sportType = sportType_example; // Sport type of activity. For example - Run, MountainBikeRide, Ride, etc.
Date *startDateLocal = 2013-10-20T19:20:30+01:00; // ISO 8601 formatted date time.
Integer *elapsedTime = 56; // In seconds.
String *type = type_example; // Type of activity. For example - Run, Ride etc. (optional)
String *description = description_example; // Description of the activity. (optional)
Float *distance = 3.4; // In meters. (optional)
Integer *trainer = 56; // Set to 1 to mark as a trainer activity. (optional)
Integer *commute = 56; // Set to 1 to mark as commute. (optional)

STRVActivitiesApi *apiInstance = [[STRVActivitiesApi alloc] init];

// Create an Activity
[apiInstance createActivityWith:name
    sportType:sportType
    startDateLocal:startDateLocal
    elapsedTime:elapsedTime
    type:type
    description:description
    distance:distance
    trainer:trainer
    commute:commute
    completionHandler: ^(STRVDetailedActivity output, NSError* error) {
        if (output) {
            NSLog(@"%@", output);
        }
        if (error) {
            NSLog(@"Error: %@", error);
        }
    }];
```

``` javascript
{
  "id" : 123456778928065,
  "resource_state" : 3,
  "external_id" : null,
  "upload_id" : null,
  "athlete" : {
    "id" : 12343545645788,
    "resource_state" : 1
  },
  "name" : "Chill Day",
  "distance" : 0,
  "moving_time" : 18373,
  "elapsed_time" : 18373,
  "total_elevation_gain" : 0,
  "type" : "Ride",
  "sport_type" : "MountainBikeRide",
  "start_date" : "2018-02-20T18:02:13Z",
  "start_date_local" : "2018-02-20T10:02:13Z",
  "timezone" : "(GMT-08:00) America/Los_Angeles",
  "utc_offset" : -28800,
  "achievement_count" : 0,
  "kudos_count" : 0,
  "comment_count" : 0,
  "athlete_count" : 1,
  "photo_count" : 0,
  "map" : {
    "id" : "a12345678908766",
    "polyline" : null,
    "resource_state" : 3
  },
  "trainer" : false,
  "commute" : false,
  "manual" : true,
  "private" : false,
  "flagged" : false,
  "gear_id" : "b453542543",
  "from_accepted_tag" : null,
  "average_speed" : 0,
  "max_speed" : 0,
  "device_watts" : false,
  "has_heartrate" : false,
  "pr_count" : 0,
  "total_photo_count" : 0,
  "has_kudoed" : false,
  "workout_type" : null,
  "description" : null,
  "calories" : 0,
  "segment_efforts" : [ ]
}
```

:::

:::docs-tab{language=C#}

``` c#
using System;
using System.Diagnostics;
using com.strava.api.v3.Api;
using com.strava.api.v3.Client;
using com.strava.api.v3.Model;

namespace Example
{
    public class createActivityExample
    {
        public void main()
        {
            
            // Configure OAuth2 access token for authorization: strava_oauth
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ActivitiesApi();
            var name = name_example;  // String | The name of the activity.
            var sportType = sportType_example;  // String | Sport type of activity. For example - Run, MountainBikeRide, Ride, etc.
            var startDateLocal = 2013-10-20T19:20:30+01:00;  // Date | ISO 8601 formatted date time.
            var elapsedTime = 56;  // Integer | In seconds.
            var type = type_example;  // String | Type of activity. For example - Run, Ride etc. (optional) 
            var description = description_example;  // String | Description of the activity. (optional) 
            var distance = 3.4;  // Float | In meters. (optional) 
            var trainer = 56;  // Integer | Set to 1 to mark as a trainer activity. (optional) 
            var commute = 56;  // Integer | Set to 1 to mark as commute. (optional) 

            try
            {
                // Create an Activity
                DetailedActivity result = apiInstance.createActivity(name, sportType, startDateLocal, elapsedTime, type, description, distance, trainer, commute);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ActivitiesApi.createActivity: " + e.Message );
            }
        }
    }
}
```

``` c#
{
  "id" : 123456778928065,
  "resource_state" : 3,
  "external_id" : null,
  "upload_id" : null,
  "athlete" : {
    "id" : 12343545645788,
    "resource_state" : 1
  },
  "name" : "Chill Day",
  "distance" : 0,
  "moving_time" : 18373,
  "elapsed_time" : 18373,
  "total_elevation_gain" : 0,
  "type" : "Ride",
  "sport_type" : "MountainBikeRide",
  "start_date" : "2018-02-20T18:02:13Z",
  "start_date_local" : "2018-02-20T10:02:13Z",
  "timezone" : "(GMT-08:00) America/Los_Angeles",
  "utc_offset" : -28800,
  "achievement_count" : 0,
  "kudos_count" : 0,
  "comment_count" : 0,
  "athlete_count" : 1,
  "photo_count" : 0,
  "map" : {
    "id" : "a12345678908766",
    "polyline" : null,
    "resource_state" : 3
  },
  "trainer" : false,
  "commute" : false,
  "manual" : true,
  "private" : false,
  "flagged" : false,
  "gear_id" : "b453542543",
  "from_accepted_tag" : null,
  "average_speed" : 0,
  "max_speed" : 0,
  "device_watts" : false,
  "has_heartrate" : false,
  "pr_count" : 0,
  "total_photo_count" : 0,
  "has_kudoed" : false,
  "workout_type" : null,
  "description" : null,
  "calories" : 0,
  "segment_efforts" : [ ]
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
api_instance = swagger_client.ActivitiesApi()
name = name_example # String | The name of the activity.
sportType = sportType_example # String | Sport type of activity. For example - Run, MountainBikeRide, Ride, etc.
startDateLocal = 2013-10-20T19:20:30+01:00 # Date | ISO 8601 formatted date time.
elapsedTime = 56 # Integer | In seconds.
type = type_example # String | Type of activity. For example - Run, Ride etc. (optional)
description = description_example # String | Description of the activity. (optional)
distance = 3.4 # Float | In meters. (optional)
trainer = 56 # Integer | Set to 1 to mark as a trainer activity. (optional)
commute = 56 # Integer | Set to 1 to mark as commute. (optional)

try: 
    # Create an Activity
    api_response = api_instance.createActivity(name, sportType, startDateLocal, elapsedTime, type=type, description=description, distance=distance, trainer=trainer, commute=commute)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ActivitiesApi->createActivity: %s\n" % e)
```

``` python
{
  "id" : 123456778928065,
  "resource_state" : 3,
  "external_id" : null,
  "upload_id" : null,
  "athlete" : {
    "id" : 12343545645788,
    "resource_state" : 1
  },
  "name" : "Chill Day",
  "distance" : 0,
  "moving_time" : 18373,
  "elapsed_time" : 18373,
  "total_elevation_gain" : 0,
  "type" : "Ride",
  "sport_type" : "MountainBikeRide",
  "start_date" : "2018-02-20T18:02:13Z",
  "start_date_local" : "2018-02-20T10:02:13Z",
  "timezone" : "(GMT-08:00) America/Los_Angeles",
  "utc_offset" : -28800,
  "achievement_count" : 0,
  "kudos_count" : 0,
  "comment_count" : 0,
  "athlete_count" : 1,
  "photo_count" : 0,
  "map" : {
    "id" : "a12345678908766",
    "polyline" : null,
    "resource_state" : 3
  },
  "trainer" : false,
  "commute" : false,
  "manual" : true,
  "private" : false,
  "flagged" : false,
  "gear_id" : "b453542543",
  "from_accepted_tag" : null,
  "average_speed" : 0,
  "max_speed" : 0,
  "device_watts" : false,
  "has_heartrate" : false,
  "pr_count" : 0,
  "total_photo_count" : 0,
  "has_kudoed" : false,
  "workout_type" : null,
  "description" : null,
  "calories" : 0,
  "segment_efforts" : [ ]
}
```

:::
::::
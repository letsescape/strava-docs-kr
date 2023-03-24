::::docs-panel{id=left target=#api-models-SummaryActivity}

### SummaryActivity

:::docs-table
:docs-table-row{
name="id"
requiredText="long"
description="활동의 고유 식별자"
}
:docs-table-row{
name="external_id"
requiredText="string"
description="업로드 시 제공된 식별자"
}
:docs-table-row{
name="upload_id"
requiredText="long"
description="이 활동을 초래한 업로드의 식별자"
}
:docs-table-row{
name="athlete"
requiredText="MetaAthlete"
description="<a href='/docs/reference/#api-models-MetaAthlete'>MetaAthlete</a> 의 인스턴스입니다."
}
:docs-table-row{
name="name"
requiredText="string"
description="활동의 이름"
}
:docs-table-row{
name="distance"
requiredText="float"
description="활동 거리(미터)"
}
:docs-table-row{
name="moving_time"
requiredText="integer"
description="활동의 이동 시간(초)"
}
:docs-table-row{
name="elapsed_time"
requiredText="integer"
description="활동의 경과 시간(초)"
}
:docs-table-row{
name="total_elevation_gain"
requiredText="float"
description="활동의 총 고도 상승."
}
:docs-table-row{
name="elev_high"
requiredText="float"
description="활동의 최고 고도(미터)"
}
:docs-table-row{
name="elev_low"
requiredText="float"
description="활동의 최저 고도(미터)"
}
:docs-table-row{
name="type"
requiredText="ActivityType"
description="더 이상 사용되지 않습니다. sport_type 사용 선호"
}
:docs-table-row{
name="sport_type"
requiredText="SportType"
description="<a href='/docs/reference/#api-models-SportType'>SportType</a> 의 인스턴스."
}
:docs-table-row{
name="start_date"
requiredText="DateTime"
description="활동이 시작된 시간입니다."
}
:docs-table-row{
name="start_date_local"
requiredText="DateTime"
description="현지 시간대에서 활동이 시작된 시간입니다."
}
:docs-table-row{
name="timezone"
requiredText="string"
description="활동 시간대"
}
:docs-table-row{
name="start_latlng"
requiredText="LatLng"
description="<a href='/docs/reference/#api-models-LatLng'>LatLng</a> 의 인스턴스입니다."
}
:docs-table-row{
name="end_latlng"
requiredText="LatLng"
description="<a href='/docs/reference/#api-models-LatLng'>LatLng</a> 의 인스턴스입니다."
}
:docs-table-row{
name="achievement_count"
requiredText="integer"
description="이 활동을 통해 얻은 성과의 수"
}
:docs-table-row{
name="kudos_count"
requiredText="integer"
description="이 활동에 대해 주어진 명성의 수"
}
:docs-table-row{
name="comment_count"
requiredText="integer"
description="이 활동에 대한 댓글 수"
}
:docs-table-row{
name="athlete_count"
requiredText="integer"
description="그룹 활동에 참가하는 선수의 수"
}
:docs-table-row{
name="photo_count"
requiredText="integer"
description="이 활동에 대한 Instagram 사진 수"
}
:docs-table-row{
name="total_photo_count"
requiredText="integer"
description="이 활동에 대한 Instagram 및 Strava 사진 수"
}
:docs-table-row{
name="map"
requiredText="PolylineMap"
description="<a href='/docs/reference/#api-models-PolylineMap'>PolylineMap</a> 의 인스턴스입니다 ."
}
:docs-table-row{
name="trainer"
requiredText="boolean"
description="이 활동이 트레이닝 머신에 기록되었는지 여부"
}
:docs-table-row{
name="commute"
requiredText="boolean"
description="이 활동이 통근인지 여부"
}
:docs-table-row{
name="manual"
requiredText="boolean"
description="이 활동이 수동으로 생성되었는지 여부"
}
:docs-table-row{
name="private"
requiredText="boolean"
description="이 활동이 비공개인지 여부"
}
:docs-table-row{
name="flagged"
requiredText="boolean"
description="이 활동이 플래그 지정되었는지 여부"
}
:docs-table-row{
name="workout_type"
requiredText="integer"
description="활동의 운동 유형"
}
:docs-table-row{
name="upload_id_str"
requiredText="string"
description="문자열 형식의 업로드 고유 식별자"
}
:docs-table-row{
name="average_speed"
requiredText="float"
description="활동의 평균 속도(초당 미터)"
}
:docs-table-row{
name="max_speed"
requiredText="float"
description="활동의 최대 속도(초당 미터)"
}
:docs-table-row{
name="has_kudoed"
requiredText="boolean"
description="로그인한 선수가 이 활동을 추천했는지 여부"
}
:docs-table-row{
name="hide_from_home"
requiredText="boolean"
description="활동이 음소거되었는지 여부"
}
:docs-table-row{
name="gear_id"
requiredText="string"
description="활동에 대한 장비의 ID"
}
:docs-table-row{
name="kilojoules"
requiredText="float"
description="이 활동 동안 수행된 총 작업(킬로줄)입니다. 놀이기구만"
}
:docs-table-row{
name="average_watts"
requiredText="float"
description="이 활동 중 평균 전력 출력(와트)입니다. 놀이기구만"
}
:docs-table-row{
name="device_watts"
requiredText="boolean"
description="와트가 전력계에서 나온 것인지 여부, 추정되는 경우 거짓"
}
:docs-table-row{
name="max_watts"
requiredText="integer"
description="파워미터 데이터만 있는 라이딩"
}
:docs-table-row{
name="weighted_average_watts"
requiredText="integer"
description="정규화된 전력과 유사합니다. 파워미터 데이터만 있는 라이딩"
}
:::

::::

::::docs-panel{id=right}
::::

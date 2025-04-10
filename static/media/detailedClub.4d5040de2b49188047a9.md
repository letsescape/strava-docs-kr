::::docs-panel{id=left target=#api-models-DetailedClub}

### DetailedClub

:::docs-table
:docs-table-row{
name="id"
requiredText="long"
description="클럽의 고유 식별자입니다."
}
:docs-table-row{
name="resource_state"
requiredText="integer"
description='리소스 상태, 세부 수준을 나타냅니다. 가능한 값: 1 -> "메타", 2 -> "요약", 3 -> "세부 사항"'
}
:docs-table-row{
name="name"
requiredText="string"
description="클럽의 이름입니다."
}
:docs-table-row{
name="profile_medium"
requiredText="string"
description="60x60픽셀 프로필 사진의 URL입니다."
}
:docs-table-row{
name="cover_photo"
requiredText="string"
description="~1185x580픽셀 표지 사진의 URL입니다."
}
:docs-table-row{
name="cover_photo_small"
requiredText="string"
description="~360x176픽셀 표지 사진의 URL입니다."
}
:docs-table-row{
name="sport_type"
requiredText="string"
description="더 이상 사용되지 않습니다. activity_types를 사용하는 것이 좋습니다. 다음 값 중 하나를 사용할 수 있습니다: <code> cycling </code>, <code> running </code>, <code> triathlon </code>, <code> other </code>"
}
:docs-table-row{
name="activity_types"
requiredText="ActivityType"
description="클럽에 포함되는 활동 유형. 이것은 sport_type보다 우선합니다."
}
:docs-table-row{
name="city"
requiredText="string"
description="클럽의 도시."
}
:docs-table-row{
name="state"
requiredText="string"
description="클럽의 주 또는 지역."
}
:docs-table-row{
name="country"
requiredText="string"
description="클럽의 국가."
}
:docs-table-row{
name="private"
requiredText="boolean"
description="클럽이 비공개인지 여부."
}
:docs-table-row{
name="member_count"
requiredText="integer"
description="클럽 회원 수입니다."
}
:docs-table-row{
name="featured"
requiredText="boolean"
description="클럽이 추천되는지 여부."
}
:docs-table-row{
name="verified"
requiredText="boolean"
description="클럽 인증 여부."
}
:docs-table-row{
name="url"
requiredText="string"
description="클럽의 가상 URL입니다."
}
:docs-table-row{
name="membership"
requiredText="string"
description="로그인한 선수의 멤버십 상태입니다. 다음 값 중 하나를 사용할 수 있습니다 <code> member </code>, <code> pending </code>"
}
:docs-table-row{
name="admin"
requiredText="boolean"
description="현재 로그인한 선수가 이 클럽의 관리자인지 여부."
}
:docs-table-row{
name="owner"
requiredText="boolean"
description="현재 로그인한 선수가 이 클럽의 소유자인지 여부."
}
:docs-table-row{
name="following_count"
requiredText="integer"
description="로그인한 선수가 팔로우하는 클럽의 선수 수.
"
}
:::

::::

::::docs-panel{id=right}
::::


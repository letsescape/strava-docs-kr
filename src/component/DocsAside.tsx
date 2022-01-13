export default function DocsAside() {
    return (

        <aside className="sidenav">
            <nav className="navbar navbar-default navbar-fixed-side">
                <ul className="nav navbar-nav">
                    <li data-group="Activities">
                        <a href="#api-Activities">Activities</a>
                        <ul>
                            <li data-group="Activities" data-name="createActivity" className="">
                                <a href="#api-Activities-createActivity">Create an Activity</a>
                            </li>
                            <li data-group="Activities" data-name="getActivityById" className="">
                                <a href="#api-Activities-getActivityById">Get Activity</a>
                            </li>
                            <li data-group="Activities" data-name="getCommentsByActivityId" className="">
                                <a href="#api-Activities-getCommentsByActivityId">List Activity Comments</a>
                            </li>
                            <li data-group="Activities" data-name="getKudoersByActivityId" className="">
                                <a href="#api-Activities-getKudoersByActivityId">List Activity Kudoers</a>
                            </li>
                            <li data-group="Activities" data-name="getLapsByActivityId" className="">
                                <a href="#api-Activities-getLapsByActivityId">List Activity Laps</a>
                            </li>
                            <li data-group="Activities" data-name="getLoggedInAthleteActivities" className="">
                                <a href="#api-Activities-getLoggedInAthleteActivities">List Athlete Activities</a>
                            </li>
                            <li data-group="Activities" data-name="getZonesByActivityId" className="">
                                <a href="#api-Activities-getZonesByActivityId">Get Activity Zones</a>
                            </li>
                            <li data-group="Activities" data-name="updateActivityById" className="">
                                <a href="#api-Activities-updateActivityById">Update Activity</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="Athletes">
                        <a href="#api-Athletes">Athletes</a>
                        <ul>
                            <li data-group="Athletes" data-name="getLoggedInAthlete" className="">
                                <a href="#api-Athletes-getLoggedInAthlete">Get Authenticated Athlete</a>
                            </li>
                            <li data-group="Athletes" data-name="getLoggedInAthleteZones" className="">
                                <a href="#api-Athletes-getLoggedInAthleteZones">Get Zones</a>
                            </li>
                            <li data-group="Athletes" data-name="getStats" className="">
                                <a href="#api-Athletes-getStats">Get Athlete Stats</a>
                            </li>
                            <li data-group="Athletes" data-name="updateLoggedInAthlete" className="">
                                <a href="#api-Athletes-updateLoggedInAthlete">Update Athlete</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="Clubs">
                        <a href="#api-Clubs">Clubs</a>
                        <ul>
                            <li data-group="Clubs" data-name="getClubActivitiesById" className="">
                                <a href="#api-Clubs-getClubActivitiesById">List Club Activities</a>
                            </li>
                            <li data-group="Clubs" data-name="getClubAdminsById" className="">
                                <a href="#api-Clubs-getClubAdminsById">List Club Administrators</a>
                            </li>
                            <li data-group="Clubs" data-name="getClubById" className="">
                                <a href="#api-Clubs-getClubById">Get Club</a>
                            </li>
                            <li data-group="Clubs" data-name="getClubMembersById" className="">
                                <a href="#api-Clubs-getClubMembersById">List Club Members</a>
                            </li>
                            <li data-group="Clubs" data-name="getLoggedInAthleteClubs" className="">
                                <a href="#api-Clubs-getLoggedInAthleteClubs">List Athlete Clubs</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="Gears">
                        <a href="#api-Gears">Gears</a>
                        <ul>
                            <li data-group="Gears" data-name="getGearById" className="">
                                <a href="#api-Gears-getGearById">Get Equipment</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="Routes">
                        <a href="#api-Routes">Routes</a>
                        <ul>
                            <li data-group="Routes" data-name="getRouteAsGPX" className="">
                                <a href="#api-Routes-getRouteAsGPX">Export Route GPX</a>
                            </li>
                            <li data-group="Routes" data-name="getRouteAsTCX" className="">
                                <a href="#api-Routes-getRouteAsTCX">Export Route TCX</a>
                            </li>
                            <li data-group="Routes" data-name="getRouteById" className="">
                                <a href="#api-Routes-getRouteById">Get Route</a>
                            </li>
                            <li data-group="Routes" data-name="getRoutesByAthleteId" className="">
                                <a href="#api-Routes-getRoutesByAthleteId">List Athlete Routes</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="SegmentEfforts">
                        <a href="#api-SegmentEfforts">SegmentEfforts</a>
                        <ul>
                            <li data-group="SegmentEfforts" data-name="getEffortsBySegmentId" className="">
                                <a href="#api-SegmentEfforts-getEffortsBySegmentId">List Segment Efforts</a>
                            </li>
                            <li data-group="SegmentEfforts" data-name="getSegmentEffortById" className="">
                                <a href="#api-SegmentEfforts-getSegmentEffortById">Get Segment Effort</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="Segments">
                        <a href="#api-Segments">Segments</a>
                        <ul>
                            <li data-group="Segments" data-name="exploreSegments" className="">
                                <a href="#api-Segments-exploreSegments">Explore segments</a>
                            </li>
                            <li data-group="Segments" data-name="getLoggedInAthleteStarredSegments" className="">
                                <a href="#api-Segments-getLoggedInAthleteStarredSegments">List Starred Segments</a>
                            </li>
                            <li data-group="Segments" data-name="getSegmentById" className="">
                                <a href="#api-Segments-getSegmentById">Get Segment</a>
                            </li>
                            <li data-group="Segments" data-name="starSegment" className="">
                                <a href="#api-Segments-starSegment">Star Segment</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="Streams">
                        <a href="#api-Streams">Streams</a>
                        <ul>
                            <li data-group="Streams" data-name="getActivityStreams" className="">
                                <a href="#api-Streams-getActivityStreams">Get Activity Streams</a>
                            </li>
                            <li data-group="Streams" data-name="getRouteStreams" className="">
                                <a href="#api-Streams-getRouteStreams">Get Route Streams</a>
                            </li>
                            <li data-group="Streams" data-name="getSegmentEffortStreams" className="">
                                <a href="#api-Streams-getSegmentEffortStreams">Get Segment Effort Streams</a>
                            </li>
                            <li data-group="Streams" data-name="getSegmentStreams" className="">
                                <a href="#api-Streams-getSegmentStreams">Get Segment Streams</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="Uploads">
                        <a href="#api-Uploads">Uploads</a>
                        <ul>
                            <li data-group="Uploads" data-name="createUpload" className="">
                                <a href="#api-Uploads-createUpload">Upload Activity</a>
                            </li>
                            <li data-group="Uploads" data-name="getUploadById" className="">
                                <a href="#api-Uploads-getUploadById">Get Upload</a>
                            </li>
                        </ul>
                    </li>
                    <li data-group="models">
                        <a href="#api-models">All Models</a>
                        <ul>
                            <li><a href="#api-models-ActivityStats">ActivityStats</a></li>
                            <li><a href="#api-models-ActivityTotal">ActivityTotal</a></li>
                            <li><a href="#api-models-ActivityType">ActivityType</a></li>
                            <li><a href="#api-models-ActivityZone">ActivityZone</a></li>
                            <li><a href="#api-models-BaseStream">BaseStream</a></li>
                            <li><a href="#api-models-Comment">Comment</a></li>
                            <li><a href="#api-models-Error">Error</a></li>
                            <li><a href="#api-models-ExplorerResponse">ExplorerResponse</a></li>
                            <li><a href="#api-models-ExplorerSegment">ExplorerSegment</a></li>
                            <li><a href="#api-models-Fault">Fault</a></li>
                            <li><a href="#api-models-HeartRateZoneRanges">HeartRateZoneRanges</a></li>
                            <li><a href="#api-models-Lap">Lap</a></li>
                            <li><a href="#api-models-LatLng">LatLng</a></li>
                            <li><a href="#api-models-MetaActivity">MetaActivity</a></li>
                            <li><a href="#api-models-MetaAthlete">MetaAthlete</a></li>
                            <li><a href="#api-models-MetaClub">MetaClub</a></li>
                            <li><a href="#api-models-PhotosSummary">PhotosSummary</a></li>
                            <li><a href="#api-models-PhotosSummary_primary">PhotosSummary_primary</a></li>
                            <li><a href="#api-models-PolylineMap">PolylineMap</a></li>
                            <li><a href="#api-models-PowerZoneRanges">PowerZoneRanges</a></li>
                            <li><a href="#api-models-Route">Route</a></li>
                            <li><a href="#api-models-Split">Split</a></li>
                            <li><a href="#api-models-StreamSet">StreamSet</a></li>
                            <li><a href="#api-models-SummaryGear">SummaryGear</a></li>
                            <li><a href="#api-models-SummaryPRSegmentEffort">SummaryPRSegmentEffort</a></li>
                            <li><a href="#api-models-SummarySegment">SummarySegment</a></li>
                            <li><a href="#api-models-SummarySegmentEffort">SummarySegmentEffort</a></li>
                            <li><a href="#api-models-TimedZoneDistribution">TimedZoneDistribution</a></li>
                            <li><a href="#api-models-UpdatableActivity">UpdatableActivity</a></li>
                            <li><a href="#api-models-Upload">Upload</a></li>
                            <li><a href="#api-models-ZoneRange">ZoneRange</a></li>
                            <li><a href="#api-models-ZoneRanges">ZoneRanges</a></li>
                            <li><a href="#api-models-Zones">Zones</a></li>
                            <li><a href="#api-models-AltitudeStream">AltitudeStream</a></li>
                            <li><a href="#api-models-CadenceStream">CadenceStream</a></li>
                            <li><a href="#api-models-DetailedGear">DetailedGear</a></li>
                            <li><a href="#api-models-DetailedSegment">DetailedSegment</a></li>
                            <li><a href="#api-models-DetailedSegmentEffort">DetailedSegmentEffort</a></li>
                            <li><a href="#api-models-DistanceStream">DistanceStream</a></li>
                            <li><a href="#api-models-HeartrateStream">HeartrateStream</a></li>
                            <li><a href="#api-models-LatLngStream">LatLngStream</a></li>
                            <li><a href="#api-models-MovingStream">MovingStream</a></li>
                            <li><a href="#api-models-PowerStream">PowerStream</a></li>
                            <li><a href="#api-models-SmoothGradeStream">SmoothGradeStream</a></li>
                            <li><a href="#api-models-SmoothVelocityStream">SmoothVelocityStream</a></li>
                            <li><a href="#api-models-SummaryActivity">SummaryActivity</a></li>
                            <li><a href="#api-models-SummaryAthlete">SummaryAthlete</a></li>
                            <li><a href="#api-models-SummaryClub">SummaryClub</a></li>
                            <li><a href="#api-models-TemperatureStream">TemperatureStream</a></li>
                            <li><a href="#api-models-TimeStream">TimeStream</a></li>
                            <li><a href="#api-models-TimedZoneRange">TimedZoneRange</a></li>
                            <li><a href="#api-models-DetailedActivity">DetailedActivity</a></li>
                            <li><a href="#api-models-DetailedAthlete">DetailedAthlete</a></li>
                            <li><a href="#api-models-DetailedClub">DetailedClub</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    )
};
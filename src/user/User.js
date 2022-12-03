import React from "react";
import Sidebar from "./Sidebar";
const User = () => {
    return (
        <>
            <Sidebar />
            <div className='profileside'>
                <div class="container">

                    <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a
                                class="nav-link active"
                                id="ex1-tab-1"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-1"
                                role="tab"
                                aria-controls="ex1-tabs-1"
                                aria-selected="true">Business Phones</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a
                                class="nav-link"
                                id="ex1-tab-2"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-2"
                                role="tab"
                                aria-controls="ex1-tabs-2"
                                aria-selected="false"
                            >Companies Pnones</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a
                                class="nav-link"
                                id="ex1-tab-3"
                                data-mdb-toggle="tab"
                                href="#ex1-tabs-3"
                                role="tab"
                                aria-controls="ex1-tabs-3"
                                aria-selected="false"
                            > Companies & Business Emails</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="ex1-content">
                        <div
                            class="tab-pane fade show active"
                            id="ex1-tabs-1"
                            role="tabpanel"
                            aria-labelledby="ex1-tab-1"
                        >
                            Business phones
                        </div>
                        <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                            companies Phones 
                        </div>
                        <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                            Companies & Business Emails
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default User;


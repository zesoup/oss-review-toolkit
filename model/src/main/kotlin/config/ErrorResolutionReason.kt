/*
 * Copyright (C) 2017-2019 HERE Europe B.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-FileCopyrightText: Copyright (C) 2017-2019 HERE Europe B.V.
 * SPDX-License-Identifier: Apache-2.0
 * License-Filename: LICENSE
 */

package com.here.ort.model.config

enum class ErrorResolutionReason {
    /**
     * The error originates from the build tool used by the project.
     */
    BUILD_TOOL_ISSUE,

    /**
     * The error can not be fixed, e.g. because it requires a change to be made by a third party that is not responsive.
     */
    CANT_FIX_ISSUE,

    /**
     * The error is due to an irrelevant scanner issue, such as time out on a large file that is not distributed.
     */
    SCANNER_ISSUE
}

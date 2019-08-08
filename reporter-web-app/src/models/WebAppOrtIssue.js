/*
 * Copyright (C) 2019 HERE Europe B.V.
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
 * SPDX-FileCopyrightText: Copyright (C) 2019 HERE Europe B.V.
 * SPDX-License-Identifier: Apache-2.0
 * License-Filename: LICENSE
 */

/* eslint constructor-super: 0 */

import OrtIssue from './OrtIssue';
import { randomStringGenerator } from '../utils';

class WebAppOrtIssue extends OrtIssue {
    #key

    #pkg;

    constructor(obj) {
        if (obj) {
            super(obj);

            if (obj.pkg) {
                this.#pkg = obj.pkg;
            }

            this.#key = randomStringGenerator(20);
        }
    }

    get key() {
        return this.#key;
    }

    get pkg() {
        return this.#pkg;
    }

    set pkg(pkg) {
        this.#pkg = pkg;
    }
}

export default WebAppOrtIssue;

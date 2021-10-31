/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const {execute, get_scope} = require("./script_utils.js");

try {
    execute`yarn workspaces foreach -pt --no-private ${get_scope()} --interlaced run build`;
} catch (e) {
    console.log(e.message);
    process.exit(1);
}

import send from './handlers/send';
import render from './handlers/render';
import redirect from './handlers/redirect';
import json from './handlers/json';
import end from './handlers/end';

import setGlobal from './setGlobal';

const _inject = setGlobal(
    { name: 'send', fn: send },
    { name: 'render', fn: render },
    { name: 'redirect', fn: redirect },
    { name: 'json', fn: json },
    { name: 'end', fn: end },
);

export {
    send,
    render,
    redirect,
    json,
    end,

    _inject
}

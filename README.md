Px-Slider
-----------------------------------------------

## Overview

The px-popover is a Predix Experience ('Px') component for displaying additional information to a user.

### Attributes

**for**
The element to which the popover provides additional information.

**interaction**
The event type that will invoke the popover. Currently supports 'click' or 'hover'.

**orientation**
The position of the popover relative to the 'for' element. Currently supports 'top', 'bottom', 'left' and 'right'.

**popover-title**
The title that will be displayed in the popover.

**popover-body**
The body text that will be displayed in the popover. Note: Does not support HTML elements within the body.

### Examples

Top popover
```
<div class="sample-container">
    <button id="btnUp" type="button" name="button">Up</button>
    <px-popover
        for="btnUp"
        interaction="click"
        orientation="top"
        popover-title="Top Popover"
        popover-body="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod.">
    </px-popover>
</div>
```

Bottom popover
```
<div class="sample-container">
    <button id="btnUp" type="button" name="button">Bottom</button>
    <px-popover
        for="btnUp"
        interaction="click"
        orientation="bottom"
        popover-title="Bottom Popover"
        popover-body="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod.">
    </px-popover>
</div>
```

Hover popover
```
<div class="sample-container">
    <div id="hoverDiv" class="hover-popover">Hover for popover</div>
    <px-popover
        for="hoverDiv"
        interaction="hover"
        orientation="bottom"
        popover-title="Bottom Popover"
        popover-body="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod.">
    </px-popover>
</div>
```

### Layout

The popover has a fixed width but will grow vertically relative to its contents.

### Latest Release
- not released yet!

### Active Development (master branch)
- <a href="http://pxc-demos.grc-apps.svc.ice.ge.com/bower_components/px-popover/demo.html" target="_blank">Demo</a>
- <a href="http://pxc-demos.grc-apps.svc.ice.ge.com/bower_components/px-popover/index.html" target="_blank">API Docs</a>

### Known Issues

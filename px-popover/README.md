Px-Popover
-----------------------------------------------

## Overview

The px-popover is a Predix Experience ('Px') component for displaying additional information to a user.

### Attributes

**for**
The element to which the popover provides additional information.

**orientation**
The position of the popover relative to the 'for' element. Currently supports 'top', 'bottom', 'left' and 'right'.

**popover-title**
The title that will be displayed in the popover.

**popover-body**
The body text that will be displayed in the popover. Note: Does not support HTML elements within the body.

**position**
If the target/popover are descendent of a relative position element, wrap the target and popover in another element with relative positioning and set this flag to "relative"

### Examples

Top popover
```
<div class="sample-container">
    <button id="btnUp" type="button" name="button">Up</button>
    <px-popover
        for="btnUp"
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
        orientation="bottom"
        popover-title="Bottom Popover"
        popover-body="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod.">
    </px-popover>
</div>
```

Popover in a Relative position ancestor
```
<div class="sample-container" style="position:relative">
...
  <div style="position relative>"
    <button id="btnRel" type="button" name="button">Bottom</button>
    <px-popover
        for="btnRel"
        orientation="bottom"
        popover-title="Bottom Popover"
        popover-body="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod."
        position="relative" >
    </px-popover>
  </div>
  ...
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
Transformations on the target with position relative parent do not work. Instead, apply the transformation to the parent div so the popover gets it too.

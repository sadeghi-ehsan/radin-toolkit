# 0.1.73

## Changes:

- 🐞 fix textarea when empty value.
- 🆕 feature: add `keepOpen` flag in textarea component.

## Breaking changes:

#### 1. **Datepicker** and **Calendar**:

1.  instead of Date() object , it's now returns and accepts string or array of strings.
    - `string | string[]`
    - ex: `"2020-03-01T20:30:00.000Z"`
2.  removed `formElementWrapperProps`. you can pass all form Element Wrapper Props in component itself

# 0.1.79

## Changes:

- endAdornment is moved from header.stories.tsx file to the original component
- logout user and route to notification panel functionality added to the component
- dropdown and hamburger menu removed from the component

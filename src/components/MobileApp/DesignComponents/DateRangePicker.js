import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { format, isValid, parse, isSameDay } from 'date-fns'
import { DateRange } from '@leihs/calendar'

export default function DateRangePicker({
  // selection:
  selectedRange,
  onChange,
  // shown date & loading state:
  shownDate = selectedRange ? selectedRange.startDate : undefined,
  onShownDateChange,
  maxDateLoaded,
  // date constraints:
  minDate,
  maxDate,
  disabledDates,
  disabledStartDates,
  disabledEndDates,
  // other:
  locale
}) {
  const dateFormatter = date => format(date, 'P', { locale: locale })
  const dateParser = s => parse(s, 'P', new Date(), { locale: locale })

  const [focus, setFocus] = useState('startDate') // 'startDate' | 'endDate'

  // DateRange component

  const range = (() => {
    const rangeConfig = {
      key: 'selection',
      showDateDisplay: false // (because we show the date input fields separately)
    }
    const { startDate, endDate } = selectedRange
    return {
      ...rangeConfig,
      startDate,
      endDate
    }
  })()

  const focusedRange = focus === 'startDate' ? [0, 0] : [0, 1]

  function handleSelectionChange(item) {
    const { startDate, endDate } = item.selection
    onChange({ startDate, endDate })
  }

  function handleRangeFocusChange(range) {
    setFocus(range[1] === 1 ? 'endDate' : 'startDate')
  }

  // satellite inputs

  const startDateInput = useRef()
  const [startDateInvalid, setStartDateInvalid] = useState(false)

  const endDateInput = useRef()
  const [endDateInvalid, setEndDateInvalid] = useState(false)

  useEffect(() => {
    startDateInput.current && (startDateInput.current.value = dateFormatter(selectedRange.startDate))
    endDateInput.current && (endDateInput.current.value = dateFormatter(selectedRange.endDate))
    setStartDateInvalid(false)
    setEndDateInvalid(false)
  }, [selectedRange])

  function handleInputBlur(e) {
    const date = dateParser(e.target.value)
    const valid = isValid(date)
    const { startDate, endDate } = selectedRange
    function handleStartDate(date) {
      if (valid) {
        if (!isSameDay(date, startDate)) {
          onChange({
            startDate: date,
            endDate: endDate >= date ? endDate : date
          })
        }
      } else {
        setStartDateInvalid(!valid)
      }
    }
    function handleEndDate(date) {
      if (valid) {
        if (!isSameDay(date, endDate)) {
          onChange({
            startDate: startDate <= date ? startDate : date,
            endDate: date
          })
        }
      } else {
        setEndDateInvalid(!valid)
      }
    }
    if (e.target.name === 'startDate') {
      handleStartDate(date)
    } else {
      handleEndDate(date)
    }
  }

  function handleInputFocus(e) {
    setFocus(e.target.name)
  }

  return (
    <div className="date-range-picker">
      <div className="form-group">
        <label data-label="Von" className="date-range-input-label">
          <input
            ref={startDateInput}
            name="startDate"
            className={cx(
              'form-control date-range-input',
              { 'date-range-input--focus': focus === 'startDate' },
              { 'is-invalid': startDateInvalid }
            )}
            defaultValue={dateFormatter(selectedRange.startDate)}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="Unbestimmt"
          />
        </label>
      </div>
      <div className="form-group mb-0">
        <label data-label="Bis" className="date-range-input-label">
          <input
            ref={endDateInput}
            name="endDate"
            className={cx(
              'form-control date-range-input',
              { 'date-range-input--focus': focus === 'endDate' },
              { 'is-invalid': endDateInvalid }
            )}
            defaultValue={dateFormatter(selectedRange.endDate)}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="Unbestimmt"
          />
        </label>
      </div>
      <DateRange
        // selection:
        ranges={[range]}
        onChange={handleSelectionChange}
        // shown date & loading state:
        shownDate={shownDate}
        focusedRange={focusedRange}
        onRangeFocusChange={handleRangeFocusChange}
        onShownDateChange={onShownDateChange}
        maxDateLoaded={maxDateLoaded}
        loadingIndicator={<div>LOADING...</div>}
        // date constraints:
        minDate={minDate}
        maxDate={maxDate}
        disabledDates={disabledDates}
        disabledStartDates={disabledStartDates}
        disabledEndDates={disabledEndDates}
        // appearance and behaviour:
        className="m-0 w-100"
        direction="vertical"
        months={1}
        weekStartsOn={1}
        showMonthAndYearPickers={false}
        rangeColors={['rgb(150, 150, 150)']}
        editableDateInputs={false}
        locale={locale}
      />
    </div>
  )
}

DateRangePicker.propTypes = {
  // selection:

  /** selected date range */
  selectedRange: PropTypes.shape({
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired
  }).isRequired,
  /** callback when the selected date range is modified (argument: `selectedRange`, shaped as described above) */
  onChange: PropTypes.func.isRequired,

  // shown date & loading state:

  /** a date in the month to be shown, defaults to `selectedRange.startDate` */
  shownDate: PropTypes.instanceOf(Date),
  /** callback then the shown month changes (argument: a date in the now-shown month) */
  onShownDateChange: PropTypes.func,
  /** date until which the the list of disabled dates were loaded (when a date beyond that is selected, `onShownDateChange` is called) */
  maxDateLoaded: PropTypes.instanceOf(Date),

  // date constraints:

  /** lower limit of the viewable calendar dates */
  minDate: PropTypes.instanceOf(Date),
  /** upper limit of the viewable calendar dates */
  maxDate: PropTypes.instanceOf(Date),
  /** dates which are unselectable (must not be within the selected range) */
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  /** dates which are unselectable as begin date */
  disabledStartDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  /** dates wich are unselectable as end date */
  disabledEndDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),

  // other:

  /** the date-fns locale, e.g. `import { de } from 'date-fns/locale'` */
  dateLocale: PropTypes.object
}

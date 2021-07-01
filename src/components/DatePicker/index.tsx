import React, { ReactElement, ReactNode } from 'react';
import { getDateInfo, isDateSelected } from 'src/utils';
import Button from '../Button';
import Icon from '../Icon';
import View, { ViewProps } from '../View';

export type DatePickerProps = ViewProps;

const DateInput = ({ date }: { date: string }): ReactElement => {
  return <input type="text" className="s-input" value={date} />;
};

const CalendarButton = ({
  children,
  selected,
  disabled,
  ...rest
}: {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  selected: boolean;
}): ReactElement => {
  const className = 'flex--item d-block px0 py6 ta-center w100';
  return disabled ? (
    // @ts-ignore
    <Button className={className} disabled />
  ) : (
    <Button
      className={className}
      size="xs"
      // @ts-ignore
      type="button"
      variant={selected ? 'primary' : undefined}
      {...rest}
    >
      {children}
    </Button>
  );
};

const Calendar = ({
  visibleMonth,
  selectedDate,
  onChangeMonth,
  onDateSelect,
}: {
  visibleMonth: any;
  selectedDate: any;
  onChangeMonth: any;
  onDateSelect: any;
}) => {
  const { year, month } = visibleMonth;

  return (
    <View className="ba bc-black-075 bar-sm bs-sm p8">
      <View as="header" className="ai-center d-flex jc-space-between">
        <Button
          size="xs"
          // @ts-ignore
          onClick={() => onChangeMonth(-1)}
          type="button"
        >
          <Icon name="ArrowLeftSm" />
        </Button>
        <View as="h4" className="fs-body1 fw-normal my0 mx8">
          {visibleMonth.date.format('MMMM YYYY')}
        </View>
        {/* @ts-ignore */}
        <Button size="sm" onClick={() => onChangeMonth(1)} type="button">
          <Icon name="ArrowRightSm" />
        </Button>
      </View>
      <View>
        {visibleMonth.datesInWeeks.map((days: any[], index: number) => {
          return (
            <View className="d-flex ai-end">
              {index === 0
                ? [...Array(7 - days.length).keys()].map(() => (
                    // @ts-ignore
                    <CalendarButton disabled />
                  ))
                : null}
              {days.map((day: number, i: number) => {
                const date = getDateInfo(`${year}-${month}-${day}`);
                const selected = isDateSelected({ selectedDate, date });
                return (
                  <CalendarButton
                    // @ts-ignore
                    onClick={() => onDateSelect(date)}
                    selected={selected}
                  >
                    {day}
                  </CalendarButton>
                );
              })}
              {index === visibleMonth.datesInWeeks.length - 1
                ? [...Array(7 - days.length).keys()].map(() => (
                    // @ts-ignore
                    <CalendarButton disabled />
                  ))
                : null}
            </View>
          );
        })}
      </View>
    </View>
  );
};
/**
 * Date picker!
 */
const DatePicker = ({
  className = '',
  ...rest
}: DatePickerProps): ReactElement => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = React.useState(getDateInfo(today));
  const [visibleMonth, setVisibleMonth] = React.useState(getDateInfo(today));

  const changeMonth = React.useCallback(
    change => {
      // @ts-ignore
      const newDate = visibleMonth.date.add(change, 'month');
      setVisibleMonth(getDateInfo(newDate));
    },
    [visibleMonth.date],
  );
  const selectDate = React.useCallback(date => setSelectedDate(date), []);

  return (
    <View
      className={`
      s-date-picker
      ${className}
    `}
      {...rest}
    >
      {/* @ts-ignore */}
      <DateInput date={selectedDate.date.format('MM/DD/YYYY')} />
      <Calendar
        visibleMonth={visibleMonth}
        selectedDate={selectedDate}
        onChangeMonth={changeMonth}
        onDateSelect={selectDate}
      />
    </View>
  );
};

export default DatePicker;

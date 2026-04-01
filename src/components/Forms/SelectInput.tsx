import styles from './SelectInput.module.css';
import IconSelect from '../../assets/IconSelect.svg';
export interface SelectOption {
  value: string;
  label: string;
}
interface ISelectProps {
  field: React.SelectHTMLAttributes<HTMLSelectElement>,
  error?: string,
  labelText?: React.ReactNode,
  required?: boolean,
  className?: string,
  disabled?: boolean,
  placeholder?: string,
  options: SelectOption[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}


export const SelectInput = (props: ISelectProps) => {
  const {field, labelText, required, className, disabled, placeholder, options} = props

  const {name} = field

  const hasError = Boolean(props.error)
  const errorMessage = props.error || ''
  const errorId = `${name}-error`
  return (
    <div className={`${styles.selectGroup} ${className || ''}`}>
      <div className={styles.labelWrapper}>
        <label htmlFor={name} className={styles.label}>
          {labelText}
          {required && (
            <span className={styles.required} aria-label='obligatorio'>
              *
            </span>
          )}
        </label>
        {/* {tooltip && (
          <div className={styles.tooltipContainer}>
            <button
              ref={tooltipButtonRef}
              type='button'
              className={styles.tooltipButton}
              onMouseEnter={handleShowTooltip}
              onMouseLeave={handleHideTooltip}
              onFocus={handleShowTooltip}
              onBlur={handleHideTooltip}
              aria-label='Información adicional'
              aria-describedby={`${id}-tooltip`}
            >
              <img
                src={IconTooltip}
                alt=''
                className={styles.tooltipIcon}
                aria-hidden='true'
              />
            </button>
            <div
              ref={tooltipContentRef}
              id={`${id}-tooltip`}
              className={`${styles.tooltipContent} ${
                styles[`tooltipContent--${tooltipPosition}`]
              } ${
                isTooltipVisible ? styles.tooltipVisible : styles.tooltipHidden
              }`}
              role='tooltip'
            >
              {tooltip.map((item, index) => (
                <div key={index} className={styles.tooltipItem}>
                  <span className={styles.tooltipTitle}>{item.title}:</span>{' '}
                  <span className={styles.tooltipDescription}>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
      <div className={styles.selectWrapper}>
        <select
          {...field}
          id={name}
          className={`${styles.select} ${hasError ? styles.selectError : ''}`}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={errorId}
          aria-required={required}
        >
          <option value=''>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <img
          src={IconSelect}
          alt=''
          className={styles.selectIcon}
          role='presentation'
          aria-hidden='true'
        />
      </div>
      {hasError && (
        <span
          id={errorId}
          className={styles.errorMessage}
          role='alert'
          aria-live='polite'
        >
          {errorMessage}
        </span>
      )}
    </div>
  )
}

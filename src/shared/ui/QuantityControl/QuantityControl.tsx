interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
}

export function QuantityControl({ value, onIncrement, onDecrement, min = 1 }: Props) {
  return (
    <div style={styles.container}>
      <button 
        style={styles.button} 
        onClick={onDecrement}
        disabled={value <= min}
      >
        −
      </button>
      
      <span style={styles.value}>{value}</span>
      
      <button style={styles.button} onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--text-tertiary)',
    padding: '4px',
    gap: '12px',
    height: '40px',
  },
  button: {
    background: 'none',
    border: 'none',
    color: 'var(--text)',
    fontSize: '18px',
    cursor: 'pointer',
    width: '32px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  value: {
    fontSize: '16px',
    fontWeight: 600,
    minWidth: '20px',
    textAlign: 'center' as const,
  },
};

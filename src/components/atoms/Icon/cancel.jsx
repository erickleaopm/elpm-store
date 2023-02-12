function Cancel ({ size, color }) {
  return (
    <svg width={size} height={size} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z' fill={color} />
      <path d='M7.8002 4.2002L4.2002 7.8002' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M4.2002 4.2002L7.8002 7.8002' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

export default Cancel

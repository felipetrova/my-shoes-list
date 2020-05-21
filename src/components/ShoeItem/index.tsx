import React from 'react';

import { Shoe } from '../../store/ducks/shoes/types';

interface OwnProps {
  shoe: Shoe
}

export default function ShoeItem({ shoe }: OwnProps) {
  return(
    <li>
      {shoe.name}
    </li>
  )
}

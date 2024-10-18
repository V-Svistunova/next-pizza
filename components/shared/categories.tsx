'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' }
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categotyActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((item, i) => (
        <Link
          key={item.id || i}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categotyActiveId === item.id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${item.name}`}
          >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

import type { Meta } from '@storybook/react';

import { Tip } from './Tip';
import React from 'react';

const Wrapper = () => (
  <Tip title="Текст получил широкое распространение в учебных и демонстрационных материалах по полиграфии и дизайну печатных изданий и веб-страниц. Распространился в 1970-х годах из-за трафаретов компании Letraset, а затем — из-за того, что служил примером текста в программе PageMaker. Применяется для того, чтобы показать читателю (пользователю) как будет выглядеть страница при использовании того или иного набора оформительских элементов и шрифтов. Бессмысленность текста приводит к тому, что при этом читатель сосредотачивается именно на внешнем виде и общем восприятии страницы, а не на ее содержании">
    <div style={{ height: 50, top: 60, left: 10, backgroundColor: '#efc' }}>test</div>
  </Tip>
);

const meta: Meta<typeof Tip> = {
  title: 'Example/Tip',
  component: Wrapper,
  tags: ['autodocs'],
};

export default meta;

export const TipExample = {};

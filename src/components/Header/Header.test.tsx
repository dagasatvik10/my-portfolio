import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { HeaderComponent } from '.';

const HEADING_ROLE = 'heading';
const MAIN_HEADING = 'SATVIK DAGA';

const MENU_LABEL = 'menu';
const MENU_ICON_TITLE = 'menu';
const X_ICON_TITLE = 'x';

test(`renders ${MAIN_HEADING} in heading`, () => {
  const { getByRole } = render(<HeaderComponent />);
  const headingElement = getByRole(HEADING_ROLE);
  expect(headingElement).toHaveTextContent(MAIN_HEADING);
});

test('toggle MenuIcon & XIcon on clicking Menu Button', async () => {
  render(<HeaderComponent />);

  // replace MenuIcon with XIcon
  fireEvent.click(screen.getByLabelText(MENU_LABEL));

  await waitFor(() => screen.getByTitle(X_ICON_TITLE));

  expect(screen.getByTitle(X_ICON_TITLE)).toBeInTheDocument();
  expect(screen.queryByTitle(MENU_ICON_TITLE)).not.toBeInTheDocument();

  // replace XIcon with MenuIcon
  fireEvent.click(screen.getByLabelText(MENU_LABEL));

  await waitFor(() => screen.getByTitle(MENU_ICON_TITLE));

  expect(screen.getByTitle(MENU_ICON_TITLE)).toBeInTheDocument();
  expect(screen.queryByTitle(X_ICON_TITLE)).not.toBeInTheDocument();
});

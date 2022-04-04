import React, { Fragment, useMemo, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'react-feather';
import { chainList, Chains, Chain } from 'eth-chains';
import { isEmpty } from 'lodash';

export const Combo: React.FC = () => {
  const evmChains: Chains = chainList;

  const [selected, setSelected] = useState();
  const [query, setQuery] = useState('');

  const filteredChains = useMemo(
    () =>
      query
        ? Object.fromEntries(
            Object.entries(evmChains).filter(([k, v]) =>
              v.name.toLowerCase().includes(query.toLowerCase())
            )
          )
        : evmChains,
    [evmChains, query]
  );

  return (
    <div className="">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full text-left rounded-lg shadow-md cursor-default  sm:text-sm overflow-hidden">
            <Combobox.Input
              className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 bg-[transparent]"
              displayValue={(chain: Chain) => chain.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {isEmpty(filteredChains) && query !== '' ? (
                <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                Object.values(filteredChains).map((chain) => (
                  <Combobox.Option
                    key={chain.id}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? 'text-white bg-teal-600' : 'text-gray-900'
                      }`
                    }
                    value={chain}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {chain.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <Check className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

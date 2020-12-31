/**
 * 1108. Defanging an IP Address
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * @param address string
 */
export function defangIPaddr(address: string): string {
  return address.replace(/\./g, '[.]');
}

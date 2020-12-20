import mappings, { ApiArguments } from './mappings';

async function read(args: ApiArguments) {
  const data = await mappings[args.action](args.context);
  return data;
}

export default read;
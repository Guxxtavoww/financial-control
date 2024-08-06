import { CustomLink } from '@/components/tools/custom-link';

export default function NotFound() {
  return (
    <div className="p-10 space-y-5 text-center">
      <h2>Invalid route</h2>
      <p>Could not find requested resource</p>
      <CustomLink href="/" className="max-w-fit">
        Go to a valid route here.
      </CustomLink>
    </div>
  );
}

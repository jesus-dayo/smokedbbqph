import Layout from '../components/Layout/Layout';

export default function Custom404() {
  return (
    <Layout full>
      <div className="bg-white h-full max-h-min p-10">
        <div className="flex justify-center h-full max-h-min p-10">
          <div className="h-full max-h-min p-10">
            <h1 className="text-2xl">
              Oops! I am unable to display the page you are looking for.
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

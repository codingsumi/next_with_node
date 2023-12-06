import Link from 'next/link'

const ForgotPassword = () => {
    return (
        <div className='vh-100 d-flex align-items-center'>
            <div className="card border-0 shadow m-auto" style={{ width: '400px' }}>
                <div className="card-body">
                    <form action="/action_page.php" autoComplete='off'>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" autoComplete='off' />
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-block">Send Verification Link</button>
                        </div>
                        <div className='mt-2 d-flex justify-content-between'>
                            <Link href={'/register'}><small>Create an Account!</small></Link>
                            <Link href={'/'}><small>Login Now</small></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;